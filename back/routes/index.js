var express = require('express');
var router = express.Router();

var bookRouter = require('./book')
var userRouter = require('./userRoute')

var cors = require('cors')
var mongoose = require('mongoose');


router.use(cors())
router.use(express.json())
const uri = "mongodb://localhost:27017/bookStore"
//connect to MongoDB
try {
  mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Connected to MongoDB")
} catch (error) {
  console.error("Error  => "+error)
}
router.use("/book",bookRouter);
router.use("/user", userRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
