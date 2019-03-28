// gotta import express ;)
const express = require('express');
// import our http logger.
const logger = require('morgan');
// we're going to use cookies so we need to parse them
const cookieParser = require('cookie-parser');

// initialize our express application.
const app = express();

// https://expressjs.com/en/api.html#express.urlencoded
// please read the above resource to understand what urlencoded does
// TLDR: it parses HTTP requests and creates the request object that we use in our routes.
app.use(express.urlencoded({ extended: true }))

// https://expressjs.com/en/api.html#express.static
// please read the above resource to understand what express.static does
// TLDR: it creates a route that will respond with static assets (files) like css, images, javascript
app.use(express.static('/public'));

// tell express that our views are using ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/todos', (req, res) => {
  res.render('home');
})

app.get('/todos/new', (req, res) => {
  res.end();
})

app.post('/todos', (req, res) => {
  res.end();
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  res.end();
})

const PORT = 4545;
const HOSTNAME = 'localhost';

app.listen(PORT, HOSTNAME, () => {
  console.log(`App running on ${HOSTNAME}:${PORT}`);
})
