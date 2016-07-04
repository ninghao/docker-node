'use strict';

/**
 * http://ninghao.net
 * https://scotch.io/tutorials/use-ejs-to-template-your-node-application
 * https://codeforgeek.com/2015/01/render-html-file-expressjs/
 */

const express = require('express');
const os = require('os');

const PORT = 3000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/index', {
    hostname: os.hostname()
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
