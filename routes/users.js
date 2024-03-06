const mongoose= require('mongoose');
var plm = require('passport-local-mongoose')
const userSchema= new mongoose.Schema({
  username:String,
  pic:String,
  chats:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    }
  ],  
  currentSocket:String
})
userSchema.plugin(plm);
mongoose.connect('mongodb://0.0.0.0/n14_project').then((result)=>{
console.log("connected to database")
}).catch(err=>{
  console.log(err)
})
module.exports = mongoose.model('user',userSchema)
