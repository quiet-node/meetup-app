const router = require('express').Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    /* middleware errors */
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    try {
      /* find user through database */
      let user = await User.findOne({ email });
      if (user)
        return res
          .status(409)
          .json({ errors: [{ msg: 'User already exists' }] });

      /* set up gravatar */
      const avatar = gravatar.url(email, {
        s: 200,
        r: 'pg',
        d: 'mm',
      });

      /* set new user */
      user = new User({
        name,
        email,
        password,
        avatar,
      });

      /* encrypt user's password */
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      /* write user to User collection */
      await user.save();

      /* JWT */
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
