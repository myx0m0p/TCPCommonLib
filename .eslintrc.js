module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "typescript",
    "security",
    "promise",
    "jest",
    "sonarjs",
  ],
  "extends": [
    "airbnb-base",
    "plugin:you-dont-need-lodash-underscore/compatible",
    "plugin:security/recommended",
    "plugin:promise/recommended",
    "plugin:jest/recommended",
    "plugin:node/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended"
  ],
  "env": {
    "node": true,
    "jest/globals": true,
  },
  "rules": {
    "node/no-unsupported-features/es-syntax": 'off',
    "eslint/no-use-before-define": 'off',
    "node/no-unpublished-require": 'off',
    "eslint/no-unused-vars": 'off',
    "import/no-unresolved": 'off',
    "import/prefer-default-export": 'off',
    "node/no-missing-import": 'off',
    "import/extensions": ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
      js: 'never',
      jsx: 'never',
    }],
  },
  "settings": {
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  "overrides": [
    {
      "files": ["*.ts"],
      "rules": {
        "no-unused-vars": "off",
        "no-undef": "off",
        "operator-linebreak": "off",
        "camelcase": "off",
        "no-restricted-syntax": "off",
        "no-param-reassign": "off",
        "security/detect-object-injection": "off",
        "no-multi-spaces": "off",
        "no-await-in-loop": "off",
        "key-spacing": "off",
        "sonarjs/no-duplicate-string": "off",
        "jest/no-disabled-tests": "off",
        "semi-style": "off",
        "jest/valid-expect": "off",
        "no-bitwise": "off",
        "no-prototype-builtins": "off",
        "no-continue": "off",
        "max-len": "off",
        "unicorn/prevent-abbreviations": "off",
        "no-use-before-define": "off",
        "node/no-missing-import": "off",
        "node/no-missing-require": "off",
        'import/first': 'off',
      }
    }
  ]
};
