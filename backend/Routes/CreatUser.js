const express = require('express');
const router = express.Router();
const User = require('../models2/user'); // Fix the path to your user model
require('../db');

const { body, validationResult } = require('express-validator');

router.post('/createuser', 

body('email').isEmail(),
body('name').isLength({ min: 5 }),
// password must be at least 5 chars long
body('password', 'incorrect password').isLength({ min: 5 }),

//
async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }





  try {
    await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location
    }).res.json({ success: true });
    
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

module.exports = router;





