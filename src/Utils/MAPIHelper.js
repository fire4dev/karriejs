const querystring = require('querystring');

const defaultMAPIOptions = {
	LANGUAGE: 'en',
	BASE_URL: 'https://mapi.mobilelegends.com/',
	HERO_ENDPOINT: 'hero/',
	API_BASE_URL: 'https://mlapi.mobilelegends.com/',
	API_ENDPOINT: 'API/',
}

const defaultUrlCreate = {
	createBaseUrl: () => {
		return `${defaultMAPIOptions.BASE_URL}`;
	},

	createHeroUrl: (action = String, query = Object) => {
		const queryData = querystring.stringify(query);
		return `${defaultMAPIOptions.BASE_URL}${defaultMAPIOptions.HERO_ENDPOINT}${action}?language=${defaultMAPIOptions.LANGUAGE}&${queryData}`;
	},
	
	createAPIUrl: (action = String, query = Object) => {
		let queryData = querystring.stringify(query);
		if (queryData.includes('%252Ffreehero%252Flist')) queryData = queryData.replace('%252Ffreehero%252Flist', '%2Ffreehero%2Flist');
		return `${defaultMAPIOptions.API_BASE_URL}${defaultMAPIOptions.API_ENDPOINT}${action}?language=${defaultMAPIOptions.LANGUAGE}&${queryData}`;
	}
}

module.exports = defaultUrlCreate;
