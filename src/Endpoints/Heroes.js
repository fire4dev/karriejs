const MAPIRequest = require('../Requests/MAPIRequest');
const MAPIEnum = require('../Enums/MAPIEnum');

class Heroes {

	/**
	 * @constructor Heroes
	 */
	constructor () {
		this.getAll = this.#all.bind(this);
		this.by = {
			id: this.#heroID.bind(this)
		}
	}

	/**
	 * Returns all champions
	 * @private
	 * @returns { object }
	 */
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

	/**
	 * Returns a champion by id
	 * @private
	 * @param {string | number} heroID - ID of champion
	 * @returns { object }
	 */
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
