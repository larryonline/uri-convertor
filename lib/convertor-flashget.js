const util = require('util');
const PARENT = require('./convertor-base.js');
const Base64 = require('base64-url');


var FlashGetConvertor = function(collection){
	this.parent = collection;
}

util.inherits(FlashGetConvertor, PARENT);

FlashGetConvertor.prototype.enabled = function (){
	return true;
}

FlashGetConvertor.prototype.specific = function() {
	return 'flashget';
}

FlashGetConvertor.prototype.specificTest = function(uri) {
	return /^flashget:\/\//.test(uri);
}

FlashGetConvertor.prototype.__regular2specific = function(uri) {
	return 'flashget://' + Base64.encode('[FLASHGET]' + uri + '[FLASHGET]');
}

FlashGetConvertor.prototype.__specific2regular = function(uri) {
	return Base64.decode(uri.slice('flashget://'.length)).slice('[FLASHGET]'.length, -('[FLASHGET]'.length));
}


exports = module.exports = FlashGetConvertor;
