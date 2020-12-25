const got = require('got');
const MAPIEnum = require('../Enums/MAPIEnum');

const MAPIRequest = got.extend({
	baseUrl: MAPIEnum.createBaseUrl(),
	responseType: 'json',
});

module.exports = MAPIRequest;
