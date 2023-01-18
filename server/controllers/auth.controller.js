const jwt =require('jsonwebtoken');
const { jwtSecret } = require('../config/config');
const config = require('../config/config');

function generateToken(user){
    const payload = JSON.stringify(user);
    return jwt.sign(payload, config.jwtSecret);
}

module.exports = {generateToken};