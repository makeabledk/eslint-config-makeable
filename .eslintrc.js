module.exports = {
  "extends": ["airbnb", "prettier"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },                                                                      
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "printWidth": 210,
        "tabWidth": 4,
        "singleQuote": true,
        "semi": true,
        "bracketSpacing": true,
        "arrowParens": "always"
      }
    ],
    "no-console": 0,
    "no-empty": 0,
    "indent": 0,
    "comma-dangle": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "radix": 0,
    "no-alert": 0,
    "max-len": 0,
    "no-await-in-loop": 0,
    "no-use-before-define": 0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle": 0,
    "no-plusplus": 0,
    "prefer-destructuring": 0,
    "no-param-reassign": 0,
    "spaced-comment": 1,
    "no-case-declarations": 1,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "optionalDependencies": true,
        "peerDependencies": true
      }
    ],
    "no-unused-vars": [
      1, {
        "ignoreSiblings": true,
        "argsIgnorePattern": "context|res|next|error|e"
      }
    ],
    "consistent-return": 1,
    "no-multiple-empty-lines": 1,
    "import/newline-after-import": 1,
    "import/first": 1,
    "camelcase": 1,
    "prefer-const": 1
  }
}