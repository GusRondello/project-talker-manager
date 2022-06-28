const errorMesages = { 
    tokenNotFound: 'Token não encontrado', 
    tokenInvalid: 'Token inválido',
};

const validateToken = (req, res, next) => {
    const { authorization: token } = req.headers;
    const { tokenNotFound, tokenInvalid } = errorMesages;

    if (!token) return res.status(401).json({ message: tokenNotFound });
    if (token.length < 16) return res.status(401).json({ message: tokenInvalid });

    next();
};

module.exports = validateToken;
