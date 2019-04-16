var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var tongzhimodel = require('../models/tongzhi.js');

/* mongoose.connect('mongodb://127.0.0.1:27017/gaytest',{ useNewUrlParser: true } );
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
}); */




// 添加通知
router.post('/add',function(req, res, next){
  var tongzhi = {
    tongzhiName:req.body.tongzhiName,
    tongzhiDate:req.body.tongzhiDate,
    tongzhiTitle:req.body.tongzhiTitle,
    tongzhiText:req.body.tongzhiText
  }
  tongzhimodel.findOne({tongzhiTitle:tongzhi.tongzhiTitle},function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    }
    if(data){
      if(data.tongzhiTitle === tongzhi.tongzhiTitle){
        return res.json({
          status:"401",
          msg:"通知已经存在"
        })
      }
    }
    new tongzhimodel(tongzhi).save(function (err,user) {
      if (err){
        return res.json({
          status:"404",
          msg:err.message
        })
      } else {
        return res.json({
          status:"200",
          msg:'ok',
          result:user
        })
      }
    })
  })
})


// 获得通知
router.get('/xjh', function(req, res, next) {
  tongzhimodel.find(function(err,doc){
    if(err){
      res.json({
        status:"400",
        msg:err.message
      })
    } else {
      res.json({
        status:'200',
        msg:'suc',
        result:doc
      })
    }
  })
});

module.exports = router;