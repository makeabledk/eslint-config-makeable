import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const tsTemplateParser = {
    parse: (code, options) => tseslint.parser.parseForESLint(code, options).ast,
};

export default [
    ...compat.extends('airbnb-base'),
    ...pluginVue.configs['flat/recommended'],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                // Vue 3 compiler macros
                defineProps: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                withDefaults: 'readonly',
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            'no-console': 0,
            'no-empty': 0,
            indent: 0,
            'comma-dangle': 0,
            'import/prefer-default-export': 0,
            'import/no-unresolved': 0,
            radix: 0,
            'no-alert': 0,
            'max-len': 0,
            'no-await-in-loop': 0,
            'no-use-before-define': 0,
            'no-restricted-syntax': 0,
            'no-underscore-dangle': 0,
            'no-plusplus': 0,
            'prefer-destructuring': 0,
            'no-param-reassign': 0,
            'import/extensions': 0,
            'consistent-return': 0,
            'arrow-body-style': 0,
            'class-methods-use-this': 0,
            'no-undef': 0,
            'no-void': 0,
            'no-continue': 0,
            'no-promise-executor-return': 0,
            'spaced-comment': 1,
            'no-case-declarations': 1,
            'import/no-extraneous-dependencies': [
                2,
                {
                    devDependencies: true,
                    optionalDependencies: true,
                    peerDependencies: true,
                },
            ],
            'no-multiple-empty-lines': 1,
            'import/newline-after-import': 1,
            'import/first': 1,
            camelcase: 1,
            'prefer-const': 1,
            'import/no-dynamic-require': 1,
            'guard-for-in': 1,
            'vue/valid-template-root': 1,
            'vue/no-reserved-component-names': 1,
            'vue/multi-word-component-names': 0,
            'vue/singleline-html-element-content-newline': 0,
            'vue/html-indent': 0,
            'vue/max-attributes-per-line': 0,
            'vue/html-self-closing': 0,
            'vue/no-v-model-argument': 0,
            'vue/valid-v-model': 0,
            'vue/no-mutating-props': 0
        },
    },

    {
        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
        languageOptions: {
            parser: tseslint.parser,
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            'no-unused-vars': 0,
            '@typescript-eslint/no-unused-vars': [
                1,
                {
                    ignoreRestSiblings: true,
                    argsIgnorePattern: 'res|next|^err',
                    caughtErrors: 'none',
                },
            ],
        },
    },
    
    {
        files: ["*.vue", "**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: {
                    js: 'espree',
                    ts: tseslint.parser,
                    tsx: tseslint.parser,
                    '<template>': tsTemplateParser,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            }
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 0,
            'no-unused-vars': 0
        }
    },
];
