module.exports = {
  'extends': [
    'eslint-config-airbnb',
    'plugin:react/recommended',
  ],
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'classes': true,
      'jsx': true,
    }
  },
  'plugins': [
    'react',
    'import',
  ],
  'root': true,
  'rules': {
    'array-bracket-spacing': [ 2, 'always', { 'objectsInArrays': false } ],
    'arrow-body-style': [ 2, 'as-needed' ],
    'arrow-parens': [ 2, 'always' ],
    'arrow-spacing': [ 2, { 'before': true, 'after': true } ],
    'block-spacing': 2,
    'brace-style': [ 2, '1tbs', { 'allowSingleLine': true } ],
    'comma-spacing': [ 2, { 'before': false, 'after': true } ],
    'comma-style': [ 2, 'last' ],
    'comma-dangle': [ 2, 'always-multiline' ],
    'computed-property-spacing': [ 2, 'always' ],
    'dot-notation': [ 2, { 'allowKeywords': true } ],
    'eqeqeq': 2,
    'func-names': 0,
    'global-require': 0,
    'import/default': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-duplicates': 0,
    'import/no-unresolved': 0,
    'indent': [ 2, 2, {'SwitchCase': 1} ],
    'jsx-quotes': [ 1, 'prefer-single' ],
    'key-spacing': [ 1, {
      'singleLine': {
        'beforeColon': false,
        'afterColon': true
      },
      'multiLine': {
        'beforeColon': false,
        'afterColon': true,
        // 'align': 'value'
      }
    } ],
    'keyword-spacing': 2,
    'max-depth': [ 2, 10],
    'max-len': [ 2, 100, 2, {'ignoreUrls': true} ],
    'max-params': [ 2, 4],
    'new-parens': 2,
    'no-alert': 0,
    'no-bitwise': 2,
    'no-console': 0,
    'no-else-return': 2,
    'no-eval': 2,
    'no-implied-eval': 2,
    'no-multi-spaces': [ 0, {
      'exceptions': {
        'VariableDeclaration': true
      }
    } ],
    'no-param-reassign': [ 2, { 'props': false } ],
    'no-self-compare': 2,
    'no-sparse-arrays': 2,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unused-expressions': [ 2, { 'allowShortCircuit': true, 'allowTernary': true } ],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'object-curly-spacing': [ 2, 'always' ],
    'padded-blocks': [ 2, { 'blocks': 'never', 'switches': 'never', 'classes': 'always' } ],
    'prefer-spread': 2,
    'quote-props': [ 2, 'as-needed' ],
    'quotes': [ 2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true} ],
    'react/display-name': 0,
    'react/jsx-curly-spacing': [ 2, 'always' ],
    'react/no-multi-comp': 0,
    'react/prefer-stateless-function': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [ 2, 'never' ],
    'space-in-parens': [ 1, 'always', { 'exceptions': ['empty' ] } ],
    'template-curly-spacing': [ 2, 'always' ],
    'yoda': [ 2, 'always', { 'exceptRange': true } ],
    'no-empty-label': 0,
    'space-after-keywords': 0,
    'space-return-throw-case': 0,
  },
  'settings': {
    'import/parser': 'babel-eslint',
    'import/resolve': {
      'moduleDirectory': ['node_modules', 'src' ]
    },
  },
}
