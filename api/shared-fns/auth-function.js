const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../shared-fns/secrets')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodeToken) => {
      err ? res.status(401).json({ message: 'Not authorized. Please login to access this webpage.' }) : req.decodedJWT = decodeToken
      next()
    }) } else {
    res.status(401).json({ message: 'Not authorized. Please login to access this webpage.'  })
  }
};
