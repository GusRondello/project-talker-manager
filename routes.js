const express = require('express');

const routes = express.Router();

const readTalkerFile = require('./controls/talkers/readTalkers');
const findTalkerById = require('./controls/talkers/searcTalkersId');
const generateToken = require('./controls/login/createToken');
const validateLogin = require('./controls/login/validateLogin');
const validateToken = require('./controls/talkers/validateToken');
const validateName = require('./controls/talkers/validateName');
const validateAge = require('./controls/talkers/validateAge');
const { validateTalk, 
    validateWatchedAt, 
    validateRate } = require('./controls/talkers/talkValidate');
const addTalker = require('./controls/talkers/addTalker');
const updateTalker = require('./controls/talkers/editTalker');
const deleteTalker = require('./controls/talkers/deleteTalker');

routes.get('/talker', readTalkerFile);
routes.get('/talker/:id', findTalkerById);
routes.post('/login', validateLogin, generateToken);
routes.post('/talker', 
    validateToken, 
    validateName, 
    validateAge, 
    validateTalk, 
    validateRate,
    validateWatchedAt,
    addTalker);
routes.put('/talker/:id',
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateRate,
    validateWatchedAt,
    updateTalker);
routes.delete('/talker/:id', validateToken, deleteTalker);

module.exports = routes;
