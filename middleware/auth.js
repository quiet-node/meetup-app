const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //next is a callback help move on to the next piece
  //Get token from the header
  const token = req.header('x-auth-token');

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' }); //401 is auth denied
  }

  //verify tokens
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' });
  }
};
