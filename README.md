# Dingle Validator
Parameter Validation for [Dingle](https://github.com/Vmlweb/Dingle)

## Installation

```bash
$ npm install --save dingle-validator
```

## Usage

Simply require the dingle validator module and specify a data type:

```javascript
exports.params.email = {
	description: 'Email for the user being registered',
	required: true,
	validator: require('dingle-validator').email
}
```

## Custom Errors

To return a custom error you must pass it into the function like so:

```javascript
exports.params.email = {
	description: 'Email for the user being registered',
	required: true,
	validator: function(object){
		return require('dingle-validator').email(object, 'You must enter a valid email address!');	
	}
}
```

## Data Types

You can use any of the following data types from this module:

- `string`
- `boolean`
- `float`
- `integer`
- `date` *Returns a date object*

- `file` *Returns a multer object*
- `json` *Returns an object from JSON.parse*

- `email`
- `ip`
- `url`
- `domain`
- `base64`

- `color` *Hexidecimal color*
- `hex` *Hexidecimal number*
- `isbn`
- `isin`
- `uuid`
- `mongo` *Mongo object id*
- `card` *Debit/credit card*