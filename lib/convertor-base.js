const REGULAR_URI = /^https?:\/\//

var Convertor = function(collection){
	this.parent = collection;
};

// checkout the returns.
Convertor.prototype.specific = function(){
	return "Abstract method which subclass should implement. to descript what kind of uri can processed by this convertor";
}

Convertor.prototype.enabled = function(){
	return false;
}

// test if given uri is a REGULAR URI
Convertor.prototype.regularTest = function(uri) {
	return REGULAR_URI.test(uri);
}

// subclass should implement this method to determined, if uri can handle.
Convertor.prototype.specificTest = function(uri) {
	return false;
}

// parse regular uri
Convertor.prototype.convert = function(uri) {
	if (this.regularTest(uri)) {
		return this.__regular2specific(uri)
	} else if (this.specificTest(uri)) {
		return this.__specific2regular(uri);
	} else {
		return null;
	}
}

// subclass should implement this method, if it can convert REGULAR_URI to SPECIFIC_URI
Convertor.prototype.__regular2specific = function(uri){
	return null;
}

// subclass should implement this method, if it can convert SPECIFIC_URI to REGULAR_URI
Convertor.prototype.__specific2regular = function(uri) {
	return null;
}

exports = module.exports = Convertor;
