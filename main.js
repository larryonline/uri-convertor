var fs = require('fs');


var libfiles = fs.readdirSync('lib');
var libs = [];
libfiles.forEach(function(file) {
	if (/\.js$/.test(file)) {
		var path = './lib/' + file;
		var lib = require(path);
		libs.push(lib);
	}
})


var Collection = function(){
	this.convertors = [];
	for(var index in libs) {
		this.convertors.push(new libs[index](this));
	}
}

Collection.prototype.convert = function (uris, options) {
	options = options || {};
	uris = uris || [];
	
	var self = this;
	var styles = options.styles || null;
	var ret = {};
	
	var convertors = self.convertors;

	uris.map(function(uri, index) {
		for (var index in convertors) {
			var convertor = convertors[index];
			if (convertor.regularTest(uri)) {
				ret[uri] = {
					http: uri
				}
				break;
			} else if (convertor.specificTest(uri)){
				ret[uri] = {
					http: convertor.convert(uri)
				}
				break;
			}
		}

		if (!ret[uri]) {
			ret[uri] = {
				http: undefined
			}
		}
	});

	for (var key in ret) {
		var http = ret[key].http;
		convertors.map(function(convertor) {
			var style = convertor.specific();
			if (convertor.enabled() && (!styles || -1 < styles.indexOf(style))) {
				ret[key][convertor.specific()] = http ? convertor.convert(http) : undefined;
			}
		});
	}

	return ret;
}

Collection.prototype.styles = function (){
	var ret = [];
	var convertors = this.convertors;
	for (var i in convertors) {
		var convertor = convertors[i];
		if (convertor.enabled()) {
			ret.push(convertor.specific());
		}
	}

	return ret;
}

module.exports = exports = function(){
	return new Collection();
};