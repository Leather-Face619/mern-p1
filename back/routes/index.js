var express = require('express');
var router = express.Router();
const path = require('path')
var bookRouter = require('./book')
var userRouter = require('./userRoute')

var cors = require('cors')
var mongoose = require('mongoose');


router.use(cors())
router.use(express.json())
const uri = "mongodb://localhost:27017/bookStore"
//connect to MongoDB
try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Connected to MongoDB")
} catch (error) {
  console.error("Error  => " + error)
}
router.use("/book", bookRouter);
router.use("/user", userRouter);


// deployment 

  const dirpath = path.resolve();
  router.use(express.static("front/dist"));
  router.get("*", (req, res) => {
    res.sendFile(path.resolve(dirpath, 'front/dist/index.html'));
  });



/* GET home page. */


module.exports = router;
