import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
			},
		},
	},
	pluginJs.configs.recommended,
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
	},
	{
		files: ['src/*.js', 'test/*.test.js'],
		rules: {
			'no-duplicate-imports': 'error',
			'dot-notation': 'warn',
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
		},
	},
	{
		ignores: [
			'dist',
			'node_modules',
			'webpack.common.js',
			'webpack.dev.js',
			'webpack.prod.js',
		],
	},
];
