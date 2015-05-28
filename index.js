var val = require('validator');

//------------------------------------------------------------
//String
exports.string = function(object, error){
	return val.toString(string);
}
//Boolean
exports.boolean = function(object, error){
	if (!val.isBoolean(string)){
		throw error || "";
	}
	return val.toBoolean(string);
}
//Float
exports.float = function(object, error){
	if (!val.isFloat(string)){
		throw error || "";
	}
	return val.toFloat(string);
}
//Integer
exports.integer = function(object, error){
	if (!val.isInt(string)){
		throw error || "";
	}
	return val.toInt(string);
}
//Date
exports.date = function(object, error){
	if (!val.isDate(string)){
		throw error || "";
	}
	return val.toDate(string);
}
//------------------------------------------------------------
//File
exports.file = function(object, error){
	if (!object, error.hasOwnProperty('path')){
		throw error || "";
	}else if (object, error.size == 0){
		throw error || "";
	}
	return object, error;
}
//JSON
exports.json = function(object, error){
	if (!val.isJSON(string)){
		throw error || "";
	}
	return JSON.parse(string);
}
//------------------------------------------------------------
//Email
exports.email = function(object, error){
	if (!val.isEmail(string)){
		throw error || "";
	}
	return val.toString(string);
}
//IP
exports.ip = function(object, error){
	if (!val.isIP(string)){
		throw error || "";
	}
	return val.toString(string);
}
//URL
exports.url = function(object, error){
	if (!val.isURL(string)){
		throw error || "";
	}
	return val.toString(string);
}
//Domain
exports.domain = function(object, error){
	if (!val.isFQDN(string)){
		throw error || "";
	}
	return val.toString(string);
}
//Base64
exports.base64 = function(object, error){
	if (!val.isBase64(string)){
		throw error || "";
	}
	return val.toString(string);
}
//------------------------------------------------------------
//Color
exports.color = function(object, error){
	if (!val.isHexColor(string)){
		throw error || "";
	}
	return val.toString(string);
}
//Hex
exports.hex = function(object, error){
	if (!val.isHexadecimal(string)){
		throw error || "";
	}
	return val.toString(string);
}
//ISBN
exports.isbn = function(object, error){
	if (!val.isISBN(string)){
		throw error || "";
	}
	return val.toString(string);
}
//ISIN
exports.isin = function(object, error){
	if (!val.isISIN(string)){
		throw error || "";
	}
	return val.toString(string);
}
//UUID
exports.uuid = function(object, error){
	if (!val.isUUID(string)){
		throw error || "";
	}
	return val.toString(string);
}
//Mongo
exports.mongo = function(object, error){
	if (!val.isMongoId(string)){
		throw error || "";
	}
	return val.toString(string);
}
//Credit/Debit
exports.card = function(object, error){
	if (!val.isCreditCard(string)){
		throw error || "";
	}
	return val.toString(string);
}
//------------------------------------------------------------