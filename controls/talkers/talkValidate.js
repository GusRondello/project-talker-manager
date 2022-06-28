const errorMesages = { 
    talkNull: 'O campo "talk" é obrigatório', 
    watchedAtNull: 'O campo "watchedAt" é obrigatório',
    watchedAtInvalid: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    rateNull: 'O campo "rate" é obrigatório',
    rateInvalid: 'O campo "rate" deve ser um inteiro de 1 à 5',
};

const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    const { talkNull } = errorMesages;

    if (!talk) return res.status(400).json({ message: talkNull });

    next();
};

const validateWatchedAt = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    const { watchedAtNull, watchedAtInvalid } = errorMesages;

    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    // regex: https://bobbyhadz.com/blog/javascript-date-validation-dd-mm-yyyy

    if (!watchedAt) return res.status(400).json({ message: watchedAtNull });
    if (!dateRegex.test(watchedAt)) return res.status(400).json({ message: watchedAtInvalid });

    next();
};

const validateRate = (req, res, next) => {
    const { talk: { rate } } = req.body;
    const { rateNull, rateInvalid } = errorMesages;

    if (!rate) return res.status(400).json({ message: rateNull });
    if (rate < 1 || rate > 5) return res.status(400).json({ message: rateInvalid });

    next();
};

module.exports = { validateTalk, validateWatchedAt, validateRate };
