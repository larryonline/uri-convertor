const util = require('util');
const PARENT = require('./convertor-base.js');
const Base64 = require('base64-url');

var QQDLConvertor = function(collection){
	this.parent = collection;
}

util.inherits(QQDLConvertor, PARENT);

QQDLConvertor.prototype.enabled = function (){
	return true;
}

QQDLConvertor.prototype.specific = function() {
	return 'qqdl';
}

QQDLConvertor.prototype.specificTest = function(uri) {
	return /^qqdl:\/\//.test(uri);
}

QQDLConvertor.prototype.__regular2specific = function(uri) {
	return "qqdl://" + Base64.encode(uri);
}

QQDLConvertor.prototype.__specific2regular = function(uri) {
	var address = uri.slice("qqdl://".length);
	return Base64.decode(address);
}

exports = module.exports = QQDLConvertor;
