# TypeScript Restserver + postgres

## How to start

Install all dependencies
```
> npm install
```
Compile TypeScript to JavaScript
```
> tsc
```
Run app.js from /dist directory
```
> node ./dist/app.js
```


## Scripts

```json
"scrits" {
  "make-model" // creates files to migrate
  "migrate" // migrates tables defined in /migrations directory
  "down" // takes down every table created with migration
}
```

## Setup TypeScript project

Install:

`npm i -g typescript`
`npm i typescript --save-dev`

`npm init -y`

`tsc --init` // creates tsconfig.json

```js
tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "outDir": "./dist"
    "strict": true,
    "esModuleInterop": true,
    "sourceMap": true, //helps to debug
    "moduleResolution": "node",
  }
}
```

`tsc` // reads tsconfig.js and creates ./dist/app.js ready to use node
`node dist/app`

## tslint

`npm install tslint --save-dev`

find `node_modules/.bin/tslint`

`./node_modules/.bin/tslint --init` // to config tslint.json

tslint.json

```js
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console": false // not show error
    },
    "rulesDirectory": []
}
```

## run ts

`tsc --watch`
`nodemon dist/app.js`