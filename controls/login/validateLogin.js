const errorMesages = { 
    emailNull: 'O campo "email" é obrigatório', 
    emailInvalid: 'O "email" deve ter o formato "email@email.com"',
    passwordNull: 'O campo "password" é obrigatório',
    passwordInvalid: 'O "password" deve ter pelo menos 6 caracteres',
};

// emailRegex usado em outros projetos.
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    const { emailNull, emailInvalid, passwordNull, passwordInvalid } = errorMesages;
    const validateEmail = emailRegex.test(email);

    if (!email) return res.status(400).json({ message: emailNull });
    if (!validateEmail) return res.status(400).json({ message: emailInvalid });
    if (!password) return res.status(400).json({ message: passwordNull });
    if (password.length < 6) return res.status(400).json({ message: passwordInvalid });

    next();
};

module.exports = validateLogin;
