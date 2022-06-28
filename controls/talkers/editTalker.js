const fs = require('fs');

const updateTalker = (req, res) => {
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const talkerFile = JSON.parse(fs.readFileSync('talker.json'));
   
    const mapTalker = talkerFile.map(
        (talker) => 
        (talker.id === Number(id) ? { id: Number(id), name, age, talk } : talker),
        );

    const findTalker = mapTalker.find((talker) => talker.id === Number(id));
    fs.writeFileSync('talker.json', JSON.stringify(mapTalker));
    res.status(200).json(findTalker);
};

module.exports = updateTalker;