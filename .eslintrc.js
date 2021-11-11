module.exports = {
	extends: [
		'plugin:jest/recommended',
		'@sbks/eslint-config',
		'plugin:import/typescript',
	],
	rules: {
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				groups: [
					'builtin',
					'external',
					'internal',
					'sibling',
					'index',
					'parent',
				],
				'newlines-between': 'always',
			},
		],
		'no-unused-vars': 'off',
		'no-undef': 'off',
	},
}
