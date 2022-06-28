const errorMesages = { 
    ageNull: 'O campo "age" é obrigatório', 
    ageInvalid: 'A pessoa palestrante deve ser maior de idade',
};

const validateAge = (req, res, next) => {
    const { age } = req.body;
    const { ageNull, ageInvalid } = errorMesages;

    if (!age) return res.status(400).json({ message: ageNull });
    if (age < 18) return res.status(400).json({ message: ageInvalid });

    next();
};

module.exports = validateAge;
