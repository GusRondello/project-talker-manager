const express = require('express');

const routes = express.Router();

const readTalkerFile = require('./controls/talkers/readTalkers');
const findTalkerById = require('./controls/talkers/searcTalkersId');

routes.get('/talker', readTalkerFile);
routes.get('/talker/:id', findTalkerById);

module.exports = routes;
