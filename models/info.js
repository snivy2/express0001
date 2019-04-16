var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var infoSchema = new Schema({
  "userName":String,
  "zhuangtai":String,
  "loudong":Number,
  "loucen":Number,
  "doorNum":Number,
  "totalNum":Number,
  "trueName":String,
  "birth":Number,
  "gender":String,
  "ruzhuDate":Number,
  "minzu":String,
  "idcardNum":Number,
  "job":String,
  "phoneNum":Number,
  "panduan":String
});

/* var infoModel = mongoose.model('info', infoSchema);
infoModel.create({
  userName:"xujianhua1",
  zhuangtai:"false",
  loudong:2,
  loucen:4,
  doorNum:406,
  totalNum:211020406,
  trueName:"李岸",
  birth:19971111,
  gender:"male",
  ruzhuDate:20190414,
  minzu:"汉",
  idcardNum:321281199711112365,
  job:"祈求者",
  phoneNum:15951657883,
  panduan:"false"
},function(err){
  if(!err){
    console.log("chenggong");
  }
}) */
/* var infoModel = mongoose.model('info', infoSchema);
infoModel.create({
  userName:"xujianhua",
  zhuangtai:"false",
  loudong:1,
  loucen:5,
  doorNum:508,
  totalNum:211010508,
  trueName:"徐建华",
  birth:19971004,
  gender:"male",
  ruzhuDate:20190414,
  minzu:"汉",
  idcardNum:321281199710041111,
  job:"炼金术师",
  phoneNum:15951651883,
  panduan:"false"
},function(err){
  if(!err){
    console.log("chenggong");
  }
})
 */
module.exports = mongoose.model('info',infoSchema);