module.exports = {
	globals: {
		"ts-jest": {
			tsConfig: "tsconfig.json"
		}
	},
	transform: {
		"^.+\\.(ts)$": "ts-jest"
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "js", "jsx", "json"],
	collectCoverage: false,
	testEnvironment: "node",
	verbose: true
};
