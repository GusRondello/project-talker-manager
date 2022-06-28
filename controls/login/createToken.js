const getToken = require('crypto-random-string');

const generateToken = (_req, res) => {
    const token = getToken(16);
    res.status(200).json({ token });
};

module.exports = generateToken;