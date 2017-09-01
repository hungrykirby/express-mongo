//import express from 'express'
//import path from 'path'
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.post('/postemail', (req, res) => {
  console.log(req.body);
  res.redirect(302, "/");
});
app.listen(port);
