# Makeable esLint-setup

Enable Makeable's NodeJS formatting and linting for Typescript and Vue projects


## Prerequisites

To enable auto-formatting when saving in vscode, the extension ESLint is required.

```
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```

## Installation

```cd``` into the directory containing your Typescript or Vue package.json and run the following command:

```npm i eslint-config-makeable -D```

Copy the following scripts into your package.json-file:

```
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
}
```

In the project root, create a file called eslint.config.mjs and copy the following content into it:

```
import makeable from 'eslint-config-makeable';

export default [
    {
      ignores: [
        '**/lib/**',
        '**/dist/**',
        'eslint.config.mjs'
      ],
    },
    ...makeable,
    {
        rules: {
            /* Custom rules here */
        },
    },
];
```

If the project is a Vue project with unplugin-auto-import enabled, add the following to your eslint.config.mjs:

```
import { FlatCompat } from '@eslint/eslintrc'
import makeable from 'eslint-config-makeable';

const compat = new FlatCompat()

export default [
  {
    ignores: [
      '**/lib/**',
      '**/dist/**',
      'eslint.config.mjs',
    ],
  },
  ...makeable,
  ...compat.extends('./.eslintrc-auto-import.json'),
  {
    rules: {
      /* Custom rules here */
    },
  },
];
```

Copy the .vscode folder from the newly installed node-module to the root of your directory to avoid auto-formatting conflicts with other services like prettier-extension, typescript and vscode auto-formatting.
The auto-formatting after save only works if the .vscode folder is in the root of the directory that is open in vscode/cursor - Even if the linting is supposed to run in a subdirectory, the .vscode folder must be in the root of the directory that is open in vscode/cursor.

## Usage

The following command will show all the errors and warnings in the current project:

```npm run lint```

The following command will format all the easy fixes for the current project

If the eslint-extension for vscode is enabled, this command will be executed automatically when saving a file.

```npm run lint:fix```
