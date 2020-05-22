const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


// Les route user
router.get('/', userCtrl.getUser);
router.post('/signup', userCtrl.signupUser);
router.post('/login', userCtrl.loginUser)


module.exports = router;