const express = require('express');

const routes = express.Router();

const readTalkerFile = require('./controls/talkers/readTalkers');
const findTalkerById = require('./controls/talkers/searcTalkersId');
const generateToken = require('./controls/login/createToken');

routes.get('/talker', readTalkerFile);
routes.get('/talker/:id', findTalkerById);
routes.post('/login', generateToken);

module.exports = routes;
