const got = require('got');
const MAPIEnum = require('../Enums/MAPIEnum');

const MAPIRequest = got.extend({
	prefixUrl: MAPIEnum.BASE_URL,
	responseType: 'json',
});

module.exports = MAPIRequest;
