const defaultMAPIOptions = {
	LANGUAGE: 'en',
	BASE_URL: 'https://mapi.mobilelegends.com/',
	HERO_ALL_URL: `hero/list?language=${this.LANGUAGE}`,
	HERO_BY_ID_URL: `https://mapi.mobilelegends.com/hero/detail?language=${this.LANGUAGE}`,
}

module.exports = defaultMAPIOptions;
