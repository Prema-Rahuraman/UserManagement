const mongoose = require('mongoose');

const issuetracker = new mongoose.Schema({

	_id: mongoose.Schema.Types.ObjectId,
	issuetitle: {
		type: String,
		required: true
	},
	issueDetails: {
		type: String,
		default: ''
	},
	issueStatus: {
		type: String,
		default: 'open'
	},
	createdOn: {
		type: Date,
		default: Date.now
	},
	updatedOn: {
		type: Date,
		default: Date.now
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	modifiedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
module.exports = mongoose.model('Issue', issuetracker);