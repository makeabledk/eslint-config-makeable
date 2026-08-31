import { existsSync, writeFileSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const projectRoot = resolve(__dirname, '..', '..', '..');
const biomePath = resolve(projectRoot, 'biome.json');

// Your shared config
const biomeConfig = {
    $schema: './node_modules/@biomejs/biome/configuration_schema.json',
    assist: { actions: { source: { organizeImports: 'off' } } },
    formatter: {
        enabled: true,
        indentStyle: 'space',
        indentWidth: 4,
        lineWidth: 210,
        lineEnding: 'lf',
    },
    javascript: {
        formatter: {
            quoteStyle: 'single',
            jsxQuoteStyle: 'double',
            trailingCommas: 'es5',
            semicolons: 'always',
            arrowParentheses: 'always',
            bracketSpacing: true,
        },
    },
    css: {
        parser: {
            tailwindDirectives: true,
        },
    },
    json: { formatter: { trailingCommas: 'none' } },
    linter: { enabled: false },
    files: { includes: ['**', '!**/node_modules', '!**/dist', '!**/build', '!**/.nuxt', '!**/.output'] },
};

// Only create if it doesn't exist (don't overwrite user customizations)
if (!existsSync(biomePath)) {
    writeFileSync(biomePath, JSON.stringify(biomeConfig, null, 2) + '\n');
    console.log('✓ Created biome.json with shared config');
} else {
    console.log('ℹ biome.json already exists, skipping');
}