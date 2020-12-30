const MAPIRequest = require('../Requests/MAPIRequest');
const MAPIEnumHelper = require('../Utils/MAPIHelper');
const parseDataHelper = require('../Utils/parseDataHelper');
const FormattersHelper = require('../Utils/FormattersHelper');
const { number } = require('superstruct');

class Heroes {

	/**
	 * @constructor Heroes
	 */
	constructor () {
		this.getAll = this.#all.bind(this);
		this.by = {
			id: this.#heroID.bind(this),
			name: this.#heroName.bind(this)
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
				MAPIEnumHelper.createHeroUrl('list', '')
			);
			return parseDataHelper(body);
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
	async #heroID (heroID = number) {
		try {
			const { body } = await MAPIRequest(
				MAPIEnumHelper.createHeroUrl('detail', `id=${heroID}`)
			);
			return parseDataHelper(body);
		} catch (error) {
			throw new Error(`An endpoint error ocurred with the code: ${error.code}`);
		}
	}
	
	/**
	 * Returns a hero by name
	 * @private
	 * @param { string } heroName - Name of hero
	 * @returns { object }
	 */
	async #heroName (heroName = String) {
		try {
			const body = await this.getAll();
			const hero = body.data.filter(data => data.name === FormattersHelper.nameFirstCapitalLetter(heroName));
			if (hero.length < 1) return new Error('No heroes with this name found');
			return hero;
		} catch (error) {
			throw new Error(`An endpoint error ocurred with the code: ${error.code}`);
		}
	}
}

module.exports = Heroes;
