const express = require('express'),
      router = express.Router(),
      UserController = require('../controllers/user_controller.js');


/* GET users listing. */
router.post('/register', UserController.register);
router.post('/signin', UserController.signIn);
router.post('/editprofile', UserController.editProfile);

module.exports = router;
