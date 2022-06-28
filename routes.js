const express = require('express');

const routes = express.Router();

const readTalkerFile = require('./controls/talkers/readTalkers');

routes.get('/talker', readTalkerFile);

module.exports = routes;
