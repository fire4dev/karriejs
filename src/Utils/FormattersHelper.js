class FormattersHelper {
	nameFirstCapitalLetter = (name) => {
		let newName = name.toLowerCase();
		return `${newName[0].toUpperCase()}${newName.substr(1)}`;
	}
}

module.exports = new FormattersHelper;
