const querystring = require('querystring');

const defaultMAPIOptions = {
	LANGUAGE: 'en',
	BASE_URL: 'https://mapi.mobilelegends.com/',
	HERO_ENDPOINT: 'hero/',
}

const defaultUrlCreate = {
	createBaseUrl: () => {
		return `${defaultMAPIOptions.BASE_URL}`;
	},

	createHeroUrl: (action = String, query = Object) => {
		const queryData = querystring.stringify(query);
		return `${defaultMAPIOptions.BASE_URL}${defaultMAPIOptions.HERO_ENDPOINT}${action}?language=${defaultMAPIOptions.LANGUAGE}&${queryData}`;
	}
}

module.exports = defaultUrlCreate;
