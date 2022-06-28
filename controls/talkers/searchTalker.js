const fs = require('fs');

const searchTalker = (req, res) => {
    const { q: term } = req.query;
    const talkerFile = JSON.parse(fs.readFileSync('talker.json'));

    if (!term) return res.status(200).json(talkerFile);

    const filterTalker = talkerFile.filter(({ name }) => name.includes(term));

    res.status(200).json(filterTalker);
};

module.exports = searchTalker;
