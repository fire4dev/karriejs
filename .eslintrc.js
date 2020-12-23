module.exports = {
	"env": {
		"commonjs": true,
		"es2021": true,
		"node": true
	},
	"parserOptions": {
		"ecmaVersion": 12,
	},
	"parser": "babel-eslint",
	"rules": {
		"indent": ["error", "tab"],
		"class-methods-use-this": "off",
		"no-param-reassign": "off",
		"camelcase": "error",
		"no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
		"linebreak-style": ["error", "windows"],
		"no-tabs": "off",
		"no-alert": "off",
		"no-console": "off",
		"import/order": "off",
		"consistent-return": "off",
		"radix": "off"
	}
};
