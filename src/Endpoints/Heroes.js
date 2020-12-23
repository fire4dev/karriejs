const MAPIRequest = require('../Requests/MAPIRequest');
const MAPIEnum = require('../Enums/MAPIEnum');

class Heroes {
	constructor () {
		this.getAll = this.#all.bind(this);
		this.by = {
			id: this.heroID.bind(this)
		}
	}

	async #all () {
		try {
			const { body } = await MAPIRequest(
				MAPIEnum.HERO_ALL_URL
			);
			return body;
		} catch (error) {
			return Promise.reject(error);
		}
	}

	async heroID (heroID) {
		try {
			const { body } = await MAPIRequest(
				`${HERO_BY_ID_URL}&id=${heroID}`
			);
			return body;
		} catch (error) {
			return Promise.reject(error);
		}
	}
}

module.exports = Heroes;
