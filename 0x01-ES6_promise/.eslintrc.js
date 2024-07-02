module.exports = {
	  env: {
		      browser: true,
		      es6: true,
		      node: true,
		    },
	  extends: [
		      'eslint:recommended',
		      'plugin:import/errors',
		      'plugin:import/warnings',
		      'plugin:import/typescript',
		    ],
	  parserOptions: {
		      ecmaVersion: 2018,
		      sourceType: 'module',
		    },
	  rules: {
		      'no-console': 'off', // Turn off console.log linting errors
		      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with _
		    },
};
