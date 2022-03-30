# Management system | PERN-TypeScript

Management system

## Demo

[Deployed on Heroku](https://posgress-jarh.herokuapp.com/)

### Frontend

- ReactJS
- React Router DOM
- React Icons
- React Modal
- Sweetalert2
- Use Reducer Async

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

![Admin-1](https://raw.githubusercontent.com/josearcani/ts-node-postgres/main/screenshots/admin1.png)
![Admin-2](https://raw.githubusercontent.com/josearcani/ts-node-postgres/main/screenshots/admin2.png)
![Admin-3](https://raw.githubusercontent.com/josearcani/ts-node-postgres/main/screenshots/admin3.png)
![Admin-4](https://raw.githubusercontent.com/josearcani/ts-node-postgres/main/screenshots/admin4.png)
![Admin-5](https://raw.githubusercontent.com/josearcani/ts-node-postgres/main/screenshots/admin5.png)

#### Client

![Client-1](https://raw.githubusercontent.com/josearcani/ts-node-postgres/main/screenshots/client1.png)
![Client-2](https://raw.githubusercontent.com/josearcani/ts-node-postgres/main/screenshots/client2.png)
![Client-3](https://raw.githubusercontent.com/josearcani/ts-node-postgres/main/screenshots/client3.png)

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
  "tsc": "tsc", // install TypeScript on heroku (automatic)
  "postinstall": "npm run tsc", // compiles TS code into JS into `./dist` directory (automatic)
  "start": "node ./dist/app.js"
}
```

## Run migrations on heroku
```bash
> git push heroku deploy:main
> heroku run npm run migrate
> heroku run npm run seed
```