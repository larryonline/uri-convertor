const util = require('util');
const PARENT = require('./convertor-base.js');
const Base64 = require('base64-url');


var ThunderConvertor = function(collection){
	this.parent = collection;
}

util.inherits(ThunderConvertor, PARENT);

ThunderConvertor.prototype.enabled = function (){
	return true;
}

ThunderConvertor.prototype.specific = function() {
	return 'thunder';
}

ThunderConvertor.prototype.specificTest = function(uri) {
	return /^thunder:\/\//.test(uri);
}

ThunderConvertor.prototype.__regular2specific = function(uri) {
	return 'thunder://' + Base64.encode("AA" + uri + "ZZ");
}

ThunderConvertor.prototype.__specific2regular = function(uri) {
	var address = uri.slice("thunder://".length);
	return Base64.decode(address).slice(2, -2);
}

exports = module.exports = ThunderConvertor;
