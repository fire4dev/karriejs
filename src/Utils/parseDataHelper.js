const parseData = (data) => {
	if(!data) return {};
	if (typeof data === 'string') return JSON.parse(data);
	if (typeof data === 'object') return data;
	return {};
}

module.exports = parseData;
