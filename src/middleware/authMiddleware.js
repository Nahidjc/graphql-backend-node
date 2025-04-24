const jwt = require('jsonwebtoken');

const SECRET_KEY =  process.env.JWT_SECRET || 'jadsdsahdfshdfasdkfaskhdfhaskfasdfh';

function verifyToken(req) {
  const authHeader = req.headers.authorization || '';

  if (!authHeader.startsWith('Bearer ')) {
    throw new Error('Authorization header must start with "Bearer "');
  }

  const token = authHeader.replace('Bearer ', '').trim();

  try {
    const decodedUser = jwt.verify(token, SECRET_KEY);
    return decodedUser;
  } catch (err) {
    throw new Error('Token is invalid or has expired');
  }
}

module.exports = { verifyToken };
