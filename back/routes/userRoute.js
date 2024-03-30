var express = require('express')
var { Signup, login } = require('../Controller/userController')

var router = express.Router()

router.post("/signup",Signup)
router.post("/login",login)
module.exports = router;