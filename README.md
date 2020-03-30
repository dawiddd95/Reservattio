# Reservattio

This application is visit booking system. Application may be use to making reservations by physical therapist, psychologist, masseuse, barber, cosmetitian etc. Application allow us to creating new reservations, new employees whom we can assign to  reservation, new services and new clients. Of course we can editing and deleting every added item. Application is based on relational database PostgreSQL. Application has roles where manager has unlimited access to app and he can set every own employee what privileges that employee should have.

## Project Status

During development.

## Table of Contents

* [Getting Started](https://www.google.com)
* [Installing](https://www.google.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

1. NodeJS [Download NodeJS](https://nodejs.org/en/download/)
2. PostgreSQL [Download PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
3. Git [Download Git](https://git-scm.com/downloads)

### Installing

1. Create some database in PostgreSQL
2. Run this command in catalog of your choice: 
```bash
git clone https://github.com/dawiddd95/Reservattio.git
```
3. In terminal go now to Reservattio created catalog
```bash
cd Reservattio
```
4. In Reservattio root folder run command:
```bash
npm install & cd server & npm install & cd .. & cd client & npm install
```
5. Wait until is done
6. Go to Reservattio/server/config/database.json and change development
```bash
"development": {
    "username": "YOUR POSTGRES USERNAME",
    "password": "YOUR POSTGRES PASSWORD",
    "database": "CREATED DATABASE FROM THE FIRST POINT",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
},
```
6. Create database tables. In terminal go to Reservattio/server and run command:
```bash
npx sequelize-cli db:migrate
```
7. Done

### Running

1. In terminal go to application root folder and run command
```bash
npm start
```
2. Store runs on localhost:3000

## Technologies used

### Front-End

1. [React](https://pl.reactjs.org/)
2. [Redux](https://redux.js.org/)
3. [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
4. [Antd](https://ant.design/)
5. [Formik](https://jaredpalmer.com/formik/) + [Yup](https://github.com/jquense/yup)
6. [Styled Components](https://styled-components.com/)
7. [Axios](https://github.com/axios/axios)
8. [Immer](https://github.com/immerjs/immer)

### Back-End

1. [NodeJS](https://nodejs.org/en/)
2. [ExpressJS](https://expressjs.com/)
3. REST API
4. [PostgreSQL database](https://www.postgresql.org/)
5. [Sequelize](https://sequelize.org/)
