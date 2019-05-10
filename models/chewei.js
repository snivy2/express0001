console.log("scs")
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var cheweiSchema = new Schema({
  "userName":String,
  "phoneNum":Number,
  "zhuangtai":String,
  "trueName":String,
  "jiage":Number,
  "bianhao":Number,
  "yishou":String,
});
console.log("scs")
var cheweiModel = mongoose.model('chewei', cheweiSchema);
cheweiModel.create({
  userName:"xujianhua1",
  zhuangtai:"false",
  trueName:"李岸",
  phoneNum:15951657883,
  jiage:450,
  bianhao:101,
  yishou:"true",
},function(err){
  if(!err){
    console.log("chenggong");
  }
})

module.exports = mongoose.model('chewei',cheweiSchema);