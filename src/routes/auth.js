const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

// router.get('/:slug', tvController.detail);
router.post('/login', authController.login);
router.post('/login1', authController.login1);
router.post('/signup', authController.signup);
router.post('/keeplogin', authController.keepLogin);
router.post('/keeplogin1', authController.keepLogin1);

module.exports = router;
