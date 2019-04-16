var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var studentsSchema = new Schema({
  "studentId":{type:String},
  "studentName":String,
  "math":Number,
  "chinese":Number,
  "english":Number
});

/* var rensModel = mongoose.model('rens', studentsSchema);
rensModel.create({
  studentName:"ggayrz",
  studentId:17,
  math:508,
  chinese:20,
  english:50
},function(err){
  if(!err){
    console.log("chenggong");
  }
}) */
module.exports = mongoose.model('rens',studentsSchema);// 会自动去数据库中查找表