var express = require('express')
var getBook= require('../Controller/bookController')

var router = express.Router();

router.get('/',getBook)
module.exports = router;