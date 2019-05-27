# Makeable esLint-setup

Opsætning af Makeables NodeJS formattering og linting

## Forudsætninger

For at få implementeret auto-formatering, når man gemmer is vscode, skal man have installeret udvidelsen ESLint.

```
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```

## Installation

Put devDependencies og script fra package.json ind i projektets package.json og kør npm install. Hvis stierne i vores package.json scripts ikke stemmer overens med stien til dine filer, ændres disse.

Har du installeret Prettier-udvidelsen til vscode, afkommenteres den sidste linje i settings.json-filen i .vscode-mappen.

## Brug

Nedenstående command-line kommando viser de warnings og error, som dit projekt indeholder.

```npm run lint```

Nedenstående command-line kommando auto-formaterer filerne, der stemmer overens med stien, der er beskrevet i package.json.

Hvis man har esLint-udvidelsen til vscode, bliver denne kommando kørt automatisk, når man gemmer.

```npm run lint:fix```
