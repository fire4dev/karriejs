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
		/**
		* Returns all champions
		 	* @returns object
	 	*/
		this.getAll = this.#all.bind(this);
		this.videos = {
			by: {
				/**
				* Returns videos by hero id
					* @param {string | number} heroID string | number
					* @param {string | number} contentSize string | number
					* @param {string | number} page string | number
					* @param { boolean } withPagination boolean
					* @returns object
				*/
				id: this.#heroVideosById.bind(this),
			}
		};
		/**
		* Returns all free week champions
			* @returns object
		*/
		this.freeWeek = this.#freeWeek.bind(this);
		this.by = {
			/**
			* Returns a champion by id
				* @param {string | number} heroID string | number
				* @returns object
			*/
			id: this.#heroID.bind(this),
			/**
			* Returns a hero by name
				* @param { string } heroName string
				* @returns object
			*/
			name: this.#heroName.bind(this)
		}
	}

	/**
		* @private
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
		* @private
	*/
	async #heroID (heroID = Number) {
		try {
			const { body } = await MAPIRequest(
				MAPIEnumHelper.createHeroUrl('detail', {
					id: heroID
				})
			);
			return parseDataHelper(body);
		} catch (error) {
			throw new Error(`An endpoint error ocurred with the code: ${error.code}`);
		}
	}
	
	/**
		* @private
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

	/**
		* @private
	*/
	async #heroVideosById (heroID = Number, withPagination = Boolean, contentSize = Number, page = Number) {
		try {
			let response;
			if (withPagination) {
				if (typeof page === 'function' || typeof contentSize === 'function') {
					contentSize = 6;
					page = 1;
				}
				response = await MAPIRequest(
					MAPIEnumHelper.createHeroUrl('video', {
						id: heroID,
						size: contentSize,
						page: page
					})
				);
			} else {
				response = await MAPIRequest(
					MAPIEnumHelper.createHeroUrl('video', {
						id: heroID,
					})
				);
			}
			return parseDataHelper(response.body);
		} catch (error) {
			throw new Error(`An endpoint error ocurred with the code: ${error.code}`);
		}
	}

	/**
		* @private
	*/
	async #freeWeek () {
		try {
			const { body } = await MAPIRequest(
				MAPIEnumHelper.createAPIUrl('API.php', {
					url: '%2Ffreehero%2Flist'
				})
			);
			return parseDataHelper(body);
		} catch (error) {
			throw new Error(`An endpoint error ocurred with the code: ${error.code}`);
		}
	}
}

module.exports = Heroes;
