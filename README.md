# Makeable esLint-setup

Enable Makeable's NodeJS formatting and linting for Typescript projects


## Prerequisites

To enable auto-formatting when saving in vscode, the extension ESLint is required.

```
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```

## Installation

```cd``` into the directory containing your Typescript package.json and run the following command:

```npm i eslint-config-makeable -D```

Copy the following scripts into your package.json-file:

```
"scripts": {
    "lint": "eslint --ext .ts src/",
    "lint:fix": "eslint --fix --ext .ts src/",
}
```

Copy the following setting into your package.json-file:

```
"eslintConfig": {
    "extends": [
        "eslint-config-makeable"
    ]
},
```

Copy the .vscode folder from the newly installed node-module to the root of your directory to avoid auto-formatting conflicts with other services like prettier-extension, typescript and vscode auto-formatting.

## Usage

The following command will show all the errors and warnings in the current project:

```npm run lint```

The following command will format all the easy fixes for the current project

If the eslint-extension for vscode is enabled, this command will be executed automatically when saving a file.

```npm run lint:fix```
