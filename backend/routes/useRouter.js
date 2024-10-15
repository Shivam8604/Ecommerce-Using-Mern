const userCtrl = require("../controller/userCtrl");

const router = require("express").Router();

router.post('/register',userCtrl.register)
router.post('/login',userCtrl.login)
router.get('/logout',userCtrl.logout)
router.post('/refreshtoken',userCtrl.refreshtoken);

module.exports = router