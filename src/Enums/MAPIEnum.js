const defaultMAPIOptions = {
	LANGUAGE: 'en',
	BASE_URL: 'https://mapi.mobilelegends.com/',
	HERO_ENDPOINT: 'hero/',
}

const defaultUrlCreate = {
	creteBaseUrl: () => {
		return `${defaultMAPIOptions.BASE_URL}`;
	},

	createHeroUrl: (action = String, query = String) => {
		return `${defaultMAPIOptions.HERO_ENDPOINT}${action}?language=${defaultMAPIOptions.LANGUAGE}&${query}`;
	}
}

module.exports = defaultUrlCreate;
