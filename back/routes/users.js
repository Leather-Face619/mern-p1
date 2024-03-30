// Book Schema
var mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
  id:Number,
  name:String,
  title:String,
  price:Number,
  category:String,
  image:String
})
module.exports = mongoose.model('book', bookSchema)
