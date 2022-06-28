const fs = require('fs');

const findTalkerById = (req, res) => {
    const talkerFile = JSON.parse(fs.readFileSync('talker.json'));
    const { id } = req.params;

    const foundTalker = talkerFile.find((talker) => talker.id === Number(id));
    
    if (!foundTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    res.status(200).json(foundTalker);
};

module.exports = findTalkerById;
