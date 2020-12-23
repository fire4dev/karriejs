const got = require('got');
const MAPIEnum = require('../Enums/MAPIEnum');

const MAPIRequest = got.extend({
	baseUrl: MAPIEnum.creteBaseUrl(),
	responseType: 'json',
});

module.exports = MAPIRequest;
