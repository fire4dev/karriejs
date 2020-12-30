const got = require('got');
const MAPIEnum = require('../Utils/MAPIHelper');

const MAPIRequest = got.extend({
	baseUrl: MAPIEnum.createBaseUrl(),
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
	},
});

module.exports = MAPIRequest;
