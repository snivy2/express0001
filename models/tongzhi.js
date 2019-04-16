var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var tongzhiSchema = new Schema({
  "userName":String,
  "tongzhiName":String,
  "tongzhiDate":String,
  "tongzhiTitle":String,
  "tongzhiText":String,
  "panduan":String,
});

/* var tongzhiModel = mongoose.model('tongzhi', tongzhiSchema);
tongzhiModel.create({
  userName:"guanliyuan1",
  tongzhiName:"华华小区居委会",
  tongzhiDate:"4-14",
  tongzhiTitle:"新常态下审计文化的扬弃与建构学术研讨会征文启事",
  tongzhiText:"我国审计文化历史悠久、文脉不绝，并且特色鲜明，资源丰厚。审计文化深层地反映审计的发展和水平，积累了丰富的经验教训，对中国特色社会主义审计发展具有重要的意义。在现代审计发展中，尤其新常态下，要提升审计软实力，打造审计铁军，既要继承优秀传统审计文化，又要建构现代审计文化。为此，南京审计大学定于2016年11月召开“新常态下审计文化的扬弃与建构学术研讨会”，会议具体由南京审计大学的审计文化与教育研究院承办。本次学术会议主要研讨新常态下审计文化的传承、建构、创新，现向全国高校、科研院所和审计机构等相关研究人员征集会议论文。议题主要涉及以下几方面：",
  panduan:"false",
},function(err){
  if(!err){
    console.log("chenggong");
  }
}) */

module.exports = mongoose.model('tongzhi',tongzhiSchema);