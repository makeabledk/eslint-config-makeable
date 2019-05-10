# Makeable esLint-setup

## Få VSCode til at auto-correcte

Åben user settings og paste:
```javascript
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false,
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false,
    },
    "[typescript]": {
        "editor.formatOnSave": false,
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false,
    },
    //Hvis man også har installeret en prettier-extension til VSCode
    //"prettier.disableLanguages": ["javascript", "javascriptreact"], 
```
