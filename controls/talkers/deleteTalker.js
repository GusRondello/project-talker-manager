const fs = require('fs');

const deleteTalker = (req, res) => {
    const { id } = req.params;
    const talkerFile = JSON.parse(fs.readFileSync('talker.json'));
   
    const deletedTalker = talkerFile.filter((talker) => talker.id !== Number(id));

    fs.writeFileSync('talker.json', JSON.stringify(deletedTalker));
    res.status(204).end();
};

module.exports = deleteTalker;