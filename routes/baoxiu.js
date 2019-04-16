var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var baoxiumodel = require('../models/baoxiu.js');

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


// 用户提交报修信息的接口
router.post('/add',function(req, res, next){
  var baoxiu = {
    baoxiuName:req.body.baoxiuName,
    phoneNum:req.body.phoneNum,
    baoxiuType:req.body.baoxiuType,
    baoxiuAdd:req.body.baoxiuAdd,
    beizhu:req.body.beizhu
  }
  baoxiumodel.findOne({baoxiuAdd:baoxiu.baoxiuAdd},function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    }

    new baoxiumodel(baoxiu).save(function (err,user) {
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


// 管理员处理报修信息的接口

router.get('/xjh', function(req, res, next) {
  baoxiumodel.find(function(err,doc){
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

// 删除
router.post('/del',function(req, res, next){
  var baoxiu = {
    baoxiuName:req.body.baoxiuName
  };

  baoxiumodel.deleteOne({
    baoxiuName:baoxiu.baoxiuName
  },function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    } else {
      return res.json({
        status:"200",
        msg:"报修已处理"
      })
    }
  })
})
module.exports = router;