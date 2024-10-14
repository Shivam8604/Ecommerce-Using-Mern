const userCtrl = require('../controller/userCtrl');

const router = require('express').Router();

router.post('/register',userCtrl.register)
router.post('/refreshtoken',userCtrl.refreshtoken)

module.exports = router;