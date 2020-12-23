const MAPIRequest = require('../Requests/MAPIRequest');
const MAPIEnum = require('../Enums/MAPIEnum');

class Heroes {
	constructor () {
		this.getAll = this.#all.bind(this);
		this.by = {
			id: this.#heroID.bind(this)
		}
	}

	async #all () {
		try {
			const { body } = await MAPIRequest(
				MAPIEnum.createHeroUrl('list', '')
			);
			return body;
		} catch (error) {
			throw new Error(`An endpoint error ocurred with the code: ${error.code}`);
		}
	}

	async #heroID (heroID) {
		try {
			const { body } = await MAPIRequest(
				MAPIEnum.createHeroUrl('detail', `id=${heroID}`)
			);
			return body;
		} catch (error) {
			throw new Error(`An endpoint error ocurred with the code: ${error.code}`);
		}
	}
}

module.exports = Heroes;
