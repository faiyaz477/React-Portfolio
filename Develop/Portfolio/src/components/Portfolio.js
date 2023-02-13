
import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "PokemonBattle",
    languages: "Html, css, js",
    packages: "",
    image: "/img/pokemon.png",
    description: "Api that allows you to battle pokemon of your choice!",
    repo: "https://github.com/faiyaz477/PokemonBattle",
    live: "",
  },
  {
    id: 1,
    title: "Muse sik",
    languages: "html, handlebars, js, node, express",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/music.png",
    description: "Allows you play muisc of your choice.",
    repo: "https://github.com/faiyaz477/Muse-sik",
    live: "https://Muse-sik.herokuapp.com/",
  },
  {
    id: 2,
    title: "Ecommerce app",
    languages: "html, css, js, handlebars, react, Nosql, Mern",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, puppeteer, sequelize, react",
    image: "/img/ecommerce.png",
    description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
    live: "https://ecommerce.herokuapp.com/",
    repo: "https://github.com/faiyaz477/ecommerce",
  },
  
];

function Portfolio() {
  return (
    <div>
      <p className="Project">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
