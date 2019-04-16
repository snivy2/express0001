var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  "userName":String,
  "newsName":String,
  "newsDate":String,
  "newsTitle":String,
  "newsText":String,
  "panduan":String,
});

/* var newsModel = mongoose.model('news', newsSchema);
newsModel.create({
  userName:"guanliyuan1",
  newsName:"华华小区居委会",
  newsDate:"4-14",
  newsTitle:"开展终结结核行动，共建共享健康中国——总务委员会开展“世界防治结核病日”宣传",
  newsText:"阳春三月，万物复苏，春季也是呼吸道传染病高发季节，结合3月24日世界防治结核病宣传日，为进一步落实学校结核病防控工作，加强结核病防治知识宣教力度，提高大学生对结核病的防治意识，3月20—22日，总务委员会联合浦口区疾病预防控制中心、浦口区电视台、江浦街道社区卫生服务中心、学务委员会、书院、团委开展一系列主题宣传教育活动。今年宣传主题为“开展终结结核行动，共建共享健康中国”。",
  panduan:"false",
},function(err){
  if(!err){
    console.log("chenggong");
  }
}) */

module.exports = mongoose.model('news',newsSchema);