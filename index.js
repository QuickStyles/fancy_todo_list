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

const PORT = 4545;
const HOSTNAME = 'localhost';
app.listen(PORT, HOSTNAME, () => {
  console.log(`App running on ${HOSTNAME}:${PORT}`);
})