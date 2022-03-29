# Management system | PERN-TypeScript

Management system

## Demo

[Deployed on Heroku](https://posgress-jarh.herokuapp.com/)

### Frontend

- ReactJS - Frontend library
- React Router DOM

### Backend

- Node.js - Runtime environment for JS
- Express.js - Node.js framework, makes process of building APIs easier & faster
- PostgreSQL - Opens-source SQL database to store data
- Sequelize - TS-based ORM for mostly SQL-based databases
- JSON Web Token - A standard to secure/authenticate HTTP requests
- Bcrypt.js - For hashing passwords
- Dotenv - To load environment variables from a .env file

## Features

- Authentication (login/register with email & password)
- CRUD employees and clients with ability to choose roles
- CRUD courses, with title, description, number of students
- Admin and Manager members can add, remove courses and clients

## Screenshots

#### Admin

![Admin-1](https://github.com/josearcani/ts-node-postgres/blob/main/screenshots/admin1.jpg)
![Admin-2](https://github.com/josearcani/ts-node-postgres/blob/main/screenshots/admin2.jpg)
![Admin-3](https://github.com/josearcani/ts-node-postgres/blob/main/screenshots/admin3.jpg)
![Admin-4](https://github.com/josearcani/ts-node-postgres/blob/main/screenshots/admin4.jpg)
![Admin-5](https://github.com/josearcani/ts-node-postgres/blob/main/screenshots/admin5.jpg)

#### Client

![Client-1](https://github.com/josearcani/ts-node-postgres/blob/main/screenshots/client1.jpg)
![Client-2](https://github.com/josearcani/ts-node-postgres/blob/main/screenshots/client2.jpg)
![Client-3](https://github.com/josearcani/ts-node-postgres/blob/main/screenshots/client3.jpg)

## How to use

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
  "make-seed" // creates a seed
  "migrate" // migrates tables defined in /migrations directory
  "seed" // inserts data
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


# Heroku deploy


package.json
```json
  "make-seed": "npx sequelize-cli seed:generate --name demo-user",
  "migrate": "npx sequelize-cli db:migrate --env production",
  "seed": "npx sequelize-cli db:seed:all",
  "down": "npx sequelize-cli db:migrate:undo",
  "tsc": "tsc",
  "postinstall": "npm run tsc",
  "start": "node ./dist/app.js"
```
## "tsc"
Install TypeScript on heroku (automatic)
```
"tsc": "tsc"
```
## "postinstall"
Compiles TS code into JS into `./dist` directory (automatic)
```
"postinstall": "npm run tsc"
```

## Procfile
release runs migrations (automatic)

```
release: npx sequelize-cli db:migrate
worker: node dist/app.js
```

## Another way
One can run migrations from the console
```bash
git push heroku deploy:main

heroku run npm run migrate
heroku run npm run seed
```