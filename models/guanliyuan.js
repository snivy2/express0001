var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var guanliyuanSchema = new Schema({
  "userName":String,
  "userPwd":String,
  "zhuangtai":String
});

/*  var guanliyuanModel = mongoose.model('guanliyuan', guanliyuanSchema);
guanliyuanModel.create({
  userName:"guanliyuan1",
  userPwd:"123456",
  zhuangtai:"false"
},function(err){
  if(!err){
    console.log("chenggong");
  }
}) */

module.exports = mongoose.model('guanliyuan',guanliyuanSchema);