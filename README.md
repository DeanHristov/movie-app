# Movie app

The main purpose of this project just shows you my professions skills and кnowledge in this stack of technologies.
The project including modern tools like Babeljs.io](https://babeljs.io/) and [webpack](https://webpack.js.org/) also some of the most usages JS technologies such as React/Redux/ES6+ and SCSS. 
So, the app uses external API for listing/searching and etc. items provided by [The Movie Database (TMDb)](https://www.themoviedb.org).

# Getting started
Before you run the project you must create a new **.env** file in the same place where is stored **package.json** file.
The file has three keys, that are needed to app: 

Tasks      | Description
-----------|---------------------------------------------------------------------------------------
API_KEY=   | It is provided by [The Movie Database (TMDb)](https://www.themoviedb.org) 
API_URL=   | It is provided by [The Movie Database (TMDb)](https://www.themoviedb.org)
API_TOKEN= | It is provided by [The Movie Database (TMDb)](https://www.themoviedb.org)

You can grab their value from [here](https://www.themoviedb.org/settings/api).

1. Go to project root folder and install dependencies:
 ```bash
 npm install or yarn install
 ```
 
2. Launch development server, and open `localhost:8081` in your browser:
 ```bash
 npm run start:dev or yarn start:dev
 ```
 
# Project structure

```
dist/                  The production-ready code will be served here
build/                 The project configuration will be serve here
src/                   Project source code live here
|- constants/          Here is stored the initial state of APP
|- i18n/               All locales are stored here
|- routes/             The page routes live here
  |-Home               Dummy route - Home (/home) 
    |-containers       The all React containers components live here
    |-ui               The all React presentation  components live here
  |-Login              Another dummy route - Login (/login) 
    |-containers       The all React containers components live here
    |-ui               The all React presentation  components live here
  |- store/            Redux store live here
    |-actions          The all redux actions (async or sync) are stored here  
    |-reducers         The all redux reducers  are stored here  
    |-createStore.js   This file is responsible for creating a redux's state shape
|- styles/             The app styles are lives here
|- index.html          Static entry file
|- Main.jsx            An entry point of app
|  +- ...              additional modules and components
tests/                 The project configuration will be serve here

```

# Main tasks

The all task automation are based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Tasks             | Description
------------------|---------------------------------------------------------------------------------------
yarn start:dev    | Run development server on `http://localhost:8081/`
yarn  build:prod  | Build production-ready code `dist/` folder
 
