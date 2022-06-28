const errorMesages = { 
    nameNull: 'O campo "name" é obrigatório', 
    nameInvalid: 'O "name" deve ter pelo menos 3 caracteres',
};

const validateName = (req, res, next) => {
    const { name } = req.body;
    const { nameNull, nameInvalid } = errorMesages;

    if (!name) return res.status(400).json({ message: nameNull });
    if (name.length < 3) return res.status(400).json({ message: nameInvalid });

    next();
};

module.exports = validateName;
