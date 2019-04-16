var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var loginSchema = new Schema({
  "userName":String,
  "userPwd":String,
  "zhuangtai":String
});

/* var loginModel = mongoose.model('login', loginSchema);
loginModel.create({
  userName:"xujianhua1",
  userPwd:"123456",
  zhuangtai:"false"
},function(err){
  if(!err){
    console.log("chenggong");
  }
})

loginModel.create({
  userName:"xujianhua2",
  userPwd:"123456",
  zhuangtai:"false"
},function(err){
  if(!err){
    console.log("chenggong");
  }
}) */

module.exports = mongoose.model('login',loginSchema);