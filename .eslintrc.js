module.exports = {
  "globals": {
    "defineProps": "readonly",
    "defineEmits": "readonly",
    "defineExpose": "readonly",
    "withDefaults": "readonly"
  },
  "extends": ["airbnb", "prettier", 'plugin:vue/vue3-recommended'],
  "plugins": ["prettier"],
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": [
      2,
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
    "import/extensions": 0,
    "spaced-comment": 1,
    "no-case-declarations": 1,
    "import/no-extraneous-dependencies": [
      2,
      {
        "devDependencies": true,
        "optionalDependencies": true,
        "peerDependencies": true
      }
    ],
    "no-unused-vars": [
      1,
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": 'res|next|^err',
      },
    ],
    "consistent-return": 1,
    "no-multiple-empty-lines": 1,
    "import/newline-after-import": 1,
    "import/first": 1,
    "camelcase": 1,
    "prefer-const": 1,
    "import/no-dynamic-require": 1,
    "guard-for-in": 1,
    "vue/valid-template-root": 1,
    "arrow-body-style": 1,
    "vue/no-reserved-component-names": 1,
    "vue/multi-word-component-names": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-indent": 0,
    "vue/max-attributes-per-line": 0,
    "vue/html-self-closing": 0,
    "vue/no-v-model-argument": 0,
    "vue/valid-v-model": 0,
  }
}