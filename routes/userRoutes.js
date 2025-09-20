const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.getRegister);
router.post('/register', userController.postRegister);
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);
router.get('/forgot', userController.getForgot);
router.post('/forgot', userController.postForgot);
router.get('/logout', userController.logout);

module.exports = router;
