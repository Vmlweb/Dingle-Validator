var val = require('validator');

//------------------------------------------------------------
//String
exports.string = function(object, error){
	return val.toString(object);
}
//Boolean
exports.boolean = function(object, error){
	if (!val.isBoolean(object)){
		throw error || "";
	}
	return val.toBoolean(object);
}
//Float
exports.float = function(object, error){
	if (!val.isFloat(object)){
		throw error || "";
	}
	return val.toFloat(object);
}
//Integer
exports.integer = function(object, error){
	if (!val.isInt(object)){
		throw error || "";
	}
	return val.toInt(object);
}
//Date
exports.date = function(object, error){
	if (!val.isDate(object)){
		throw error || "";
	}
	return val.toDate(object);
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
	if (!val.isJSON(object)){
		throw error || "";
	}
	return JSON.parse(object);
}
//------------------------------------------------------------
//Email
exports.email = function(object, error){
	if (!val.isEmail(object)){
		throw error || "";
	}
	return val.toString(object);
}
//IP
exports.ip = function(object, error){
	if (!val.isIP(object)){
		throw error || "";
	}
	return val.toString(object);
}
//URL
exports.url = function(object, error){
	if (!val.isURL(object)){
		throw error || "";
	}
	return val.toString(object);
}
//Domain
exports.domain = function(object, error){
	if (!val.isFQDN(object)){
		throw error || "";
	}
	return val.toString(object);
}
//Base64
exports.base64 = function(object, error){
	if (!val.isBase64(object)){
		throw error || "";
	}
	return val.toString(object);
}
//------------------------------------------------------------
//Color
exports.color = function(object, error){
	if (!val.isHexColor(object)){
		throw error || "";
	}
	return val.toString(object);
}
//Hex
exports.hex = function(object, error){
	if (!val.isHexadecimal(object)){
		throw error || "";
	}
	return val.toString(object);
}
//ISBN
exports.isbn = function(object, error){
	if (!val.isISBN(object)){
		throw error || "";
	}
	return val.toString(object);
}
//ISIN
exports.isin = function(object, error){
	if (!val.isISIN(object)){
		throw error || "";
	}
	return val.toString(object);
}
//UUID
exports.uuid = function(object, error){
	if (!val.isUUID(object)){
		throw error || "";
	}
	return val.toString(object);
}
//Mongo
exports.mongo = function(object, error){
	if (!val.isMongoId(object)){
		throw error || "";
	}
	return val.toString(object);
}
//Credit/Debit
exports.card = function(object, error){
	if (!val.isCreditCard(object)){
		throw error || "";
	}
	return val.toString(object);
}
//------------------------------------------------------------