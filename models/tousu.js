var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var tousuSchema = new Schema({
  "userName":String,
  "tousuName":String,
  "phoneNum":Number,
  "tousuType":String,
  "tousuAdd":String,
  "neirong":String,
  "panduan":String,
});

/* var tousuModel = mongoose.model('tousu', tousuSchema);
tousuModel.create({
  userName:"xujianhua",
  tousuName:"徐建华",
  phoneNum:15951651883,
  tousuType:"留言",
  tousuAdd:"1栋508",
  neirong:"小区的东边的那颗梧桐树，梧桐絮近日增多，造成呼吸道不好的感受，建议派专人清理",
  panduan:"false",
},function(err){
  if(!err){
    console.log("chenggong");
  }
}) */

module.exports = mongoose.model('tousu',tousuSchema);
