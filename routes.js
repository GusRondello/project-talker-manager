const express = require('express');

const routes = express.Router();

const readTalkerFile = require('./controls/talkers/readTalkers');
const findTalkerById = require('./controls/talkers/searcTalkersId');
const generateToken = require('./controls/login/createToken');
const validateLogin = require('./controls/login/validateLogin');
const validateToken = require('./controls/talkers/validateToken');
const validateName = require('./controls/talkers/validateName');
const validateAge = require('./controls/talkers/validateAge');

routes.get('/talker', readTalkerFile);
routes.get('/talker/:id', findTalkerById);
routes.post('/login', validateLogin, generateToken);
routes.post('/talker', validateToken, validateName, validateAge);

module.exports = routes;
