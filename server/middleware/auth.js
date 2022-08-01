const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  /* verify tokens */
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next(); //next is a callback function help move on to the next piece of instruction
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' });
  }
};
