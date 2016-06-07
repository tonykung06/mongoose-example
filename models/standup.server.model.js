var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
	function(value) {
		return !!value && value.trim().length > 0 && value.toLocaleLowerCase() !== 'none';
	},
	'Select a valid member name.'
];

var requiredStringValidator = [
	function(val) {
		return val.trim().length > 0;
	},
	'{PATH} cannot be empty.'
];

var standupSchema = new Schema({
	memberName: {
		type: String,
		required: true,
		validate: memberNameValidator
	},
	project: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	workYesterday: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	workToday: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	impediment: {
		type: String,
		required: true,
		default: 'none'
	},
	createdOn: {
		type:Date,
		default: Date.now
	}
});

//disabling _id
/*
var noIdSchema = new Schema({
	_id: false,
	name: String
});
*/

//conditionally configuring schema
/*
var includeMiddleName = true;
var exampleSchema = new Schema;

if (includeMiddleName) {
	exampleSchema.add({
		memberName: {
			first: String,
			middle: String,
			last: String
		}
	});
} else {
	exampleSchema.add({
		memberName: {
			first: String,
			last: String
		}
	});
}

exampleSchema.add({
	project: String,
	workYesterday: String,
	workToday: String,
	impediment: String,
	createdOn: {
		type:Date,
		default: Date.now
	}
});
*/

//could load json file as a schema

//able to instantiate mutiple models from the same schema, or further customize that schema for a new model by using baseSchema.add()
/*
var customerSchema = new Schema({
	name: String
});
var Customer = mongoose.model('Customer', customerSchema);//mongoose will attempt to pluralize the name, but you could add a third arg to change the mapping
customerSchema.add({
	discountCode: String
});
var DiscountedCustomer = mongoose.model('DiscountedCustomer', customerSchema);
*/

module.exports = mongoose.model('Standup', standupSchema);