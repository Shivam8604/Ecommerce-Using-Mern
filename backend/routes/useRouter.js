const userCtrl = require('../controller/userCtrl');

const router = require('express').Router();

router.post('/register',userCtrl.register)

module.exports = router;