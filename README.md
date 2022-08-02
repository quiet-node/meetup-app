# MERN Meetup App

Live: https://serene-retreat-94411.herokuapp.com

A Social network for developers to connect. Built on top of the MERN stack

## App's functionalities:

- Signup/Signin into MeetUp

- Add details to profiles (Education, Experience, Social Links etc.)

- Post updates, like and comment on different posts in the MeetUp community

## Techonologies:

- JavaScript(ES6)/CSS/JSX

- MERN (MongoDB + Express + React + Node.js)

- React Hooks

- Redux store

- JSON Web Token, express-validator

- Gravatar

- Github's REST APIs

**Credit: https://www.udemy.com/course/mern-stack-front-to-back/**

## Running the project

**Step 1:** Clone the repository

**Step 2:** Go to the `client` folder, run `yarn` || `npm install` to install all the needed dependencies

**Step 3:** Back out and go to the `server` folder, create a `.env` file using `.example.env` as the template and fill out the variables.

  - **Step 3.1:** Go to [cloud.mongodb.com](https://account.mongodb.com/account/login), sign-in then create a new shared cluster with a cloud service (`AWS`, `Azure`, or `Google Cloud`)
  - **Step 3.2:** When it comes to network access, provide `0.0.0.0/0` as the IP address to allow connect to the cluster from anywhere
  - **Step 3.3:** After done creating the cluster, navigate to the `Database` tab, then hit `Connect` => `Connect Your Application` => copy the URL => back to the project folder => paste it to the `MONGO_URL` variable in `.env` file

**Step 4:** While still in `server` folder, run `yarn` || `npm install` to install all the needed dependencies

**Step 5:** Run `yarn server` || `npm run server` to start the server using `nodemon` OR run `yarn dev` || `npm run dev` to start both client and server using `concurrently`
