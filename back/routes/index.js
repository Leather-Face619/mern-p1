// Import required modules
var express = require('express');
var router = express.Router();
const path = require('path')
var bookRouter = require('./book')
var userRouter = require('./userRoute')

var cors = require('cors')
var mongoose = require('mongoose');

// Use middleware
router.use(cors())
router.use(express.json())

// MongoDB connection URI
const uri = "mongodb://localhost:27017/bookStore"

// Connect to MongoDB
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


// Setup for deployment

  // Get the path of the current directory
  const dirpath = path.resolve();
  // Serve static files
  router.use(express.static("front/dist"));
  // Send the index file for all other routes
  router.get("*", (req, res) => {
    res.sendFile(path.resolve(dirpath, 'front/dist/index.html'));
  });



/* GET home page */


// Export the router
module.exports = router;
