// gotta import express ;)
const express = require('express');
// import our http logger.
const logger = require('morgan');
// we're going to use cookies so we need to parse them
const cookieParser = require('cookie-parser');

// initialize our express application.
const app = express();

// tell express that our views are using ejs
app.set('view engine', 'ejs');

// https://expressjs.com/en/api.html#express.urlencoded
// please read the above resource to understand what urlencoded does
// TLDR: it parses HTTP requests and creates the request object that we use in our routes.
app.use(express.urlencoded({ extended: true }))

// https://expressjs.com/en/api.html#express.static
// please read the above resource to understand what express.static does
// TLDR: it creates a route that will respond with static assets (files) like css, images, javascript
app.use(express.static('/public'));

// initialize the cookie parser middleware
app.use(cookieParser());

// will grab request.cookies and set it to the response.locals
app.use((request, response, next) => {
  console.log(request.cookies);
  response.locals.username = request.cookies.username;
  next();
});

const knexfile = require("./knexfile.js");
const knex = require("knex")(knexfile["development"]);

app.get('/', (req, res) => {
  let username = '';
  if (res.locals.username) {
    username = res.locals.username
  }
  res.render('home', { username });
});

app.get('/todos', (req, res) => {
  res.render('home', { username: "I'm from '/todos'. We do things differently here ¯\_(ツ)_/¯"});
})

app.get('/todos/new', (request, response, next) => {
  if(request.cookies.username) {
    next()
  } else {
    response.redirect('/login');
  }
}, (req, res) => {
  res.render('new_todo');
})

app.post('/todos', (req, res) => {
  const { todo_item } = req.body;
  knex.insert({ username: req.cookies.username, body: todo_item})
  .into('todo_list')
  .then((record) => {
    console.log(`record created!`);
    res.redirect('/');
  })
  .catch((err) => {
    console.error(err);
    res.redirect('/todos/new');
  })
})

app.get('/login', (req, res) => {
  res.render('login')
})

const ONE_DAY = new Date(Date.now() + 1*24*60*60*1000);
app.post('/login', (req, res) => {
  const { username } = req.body;
  res.cookie('username', username, { expires: ONE_DAY, httpOnly:true })
  res.redirect('/');
})

const PORT = 4545;
const HOSTNAME = 'localhost';

app.listen(PORT, HOSTNAME, () => {
  console.log(`App running on ${HOSTNAME}:${PORT}`);
})
