var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var baoxiuSchema = new Schema({
  "userName":String,
  "baoxiuName":String,
  "phoneNum":Number,
  "baoxiuType":String,
  "baoxiuAdd":String,
  "beizhu":String,
  "panduan":String,
});

/* var baoxiuModel = mongoose.model('baoxiu', baoxiuSchema);
baoxiuModel.create({
  userName:"xujianhua",
  baoxiuName:"徐建华",
  phoneNum:15951651883,
  baoxiuType:"天然气问题",
  baoxiuAdd:"1栋508",
  beizhu:"天然气供应不上，周末家中宴请，速来！",
  panduan:"false",
},function(err){
  if(!err){
    console.log("chenggong");
  }
}) */

module.exports = mongoose.model('baoxiu',baoxiuSchema);