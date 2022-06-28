const fs = require('fs');

const readTalkerFile = (_req, res) => {
    const talkerFile = JSON.parse(fs.readFileSync('talker.json'));
    
    if (!talkerFile) return res.status(200).json([]);

    res.status(200).json(talkerFile);
};

module.exports = readTalkerFile;
