import antfu from '@antfu/eslint-config'

export default antfu({
  // Vue specific
  vue: true,

  // TypeScript
  typescript: true,

  // Formatting with Prettier
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier'
  },

  // Ignore patterns
  ignores: [
    'dist',
    'node_modules',
    '*.d.ts',
    'coverage',
    'tests/e2e'
  ],

  // Rules
  rules: {
    // Allow console in development
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // Vue specific rules
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',

    // Import organization
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      'newlines-between': 'always'
    }]
  }
})
