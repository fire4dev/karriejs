const Heroes = require('./Endpoints/Heroes');

class Karrie {
	constructor () {
		this.Heroes = new Heroes;
	}
}

module.exports = new Karrie;
