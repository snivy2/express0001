var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var infomodel = require('../models/info.js');

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
//录入
router.post('/add',function(req, res, next){
  var info = {
    userName:req.body.userName,
    gender:req.body.gender,
    trueName:req.body.trueName,
    loudong:req.body.loudong,
    loucen:req.body.loucen,
    doorNum:req.body.doorNum,
    totalNum:req.body.totalNum,
    birth:req.body.birth,
    ruzhuDate:req.body.ruzhuDate,
    minzu:req.body.minzu,
    idcardNum:req.body.idcardNum,
    job:req.body.job,
    phoneNum:req.body.phoneNum,
  }
  infomodel.findOne({userName:info.userName},function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    }
    if(data){
      if(data.userName === info.userName){
        return res.json({
          status:"401",
          msg:"用户名已存在"
        })
      }
    }
    new infomodel(info).save(function (err,user) {
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

//修改信息
router.post('/update',function(req, res, next){
  var info = {
    userName:req.body.userName,
    gender:req.body.gender,
    trueName:req.body.trueName,
    loudong:req.body.loudong,
    loucen:req.body.loucen,
    doorNum:req.body.doorNum,
    totalNum:req.body.totalNum,
    birth:req.body.birth,
    ruzhuDate:req.body.ruzhuDate,
    minzu:req.body.minzu,
    idcardNum:req.body.idcardNum,
    job:req.body.job,
    phoneNum:req.body.phoneNum,
  }
  infomodel.findOneAndUpdate(
    {userName:info.userName},{gender:info.gender,
    trueName:info.trueName,
    loudong:info.loudong,
    loucen:info.loucen,
    doorNum:info.doorNum,
    totalNum:info.totalNum,
    birth:info.birth,
    ruzhuDate:info.ruzhuDate,
    minzu:info.minzu,
    idcardNum:info.idcardNum,
    job:info.job,
    phoneNum:info.phoneNum,}
  ,function (err,data1) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    } else {
      if(data1){
        return res.json({
          status:"201",
          msg:"已修改",
          result:data1

        })
      } else {
        return res.json({
          status:"404",
          msg:'不存在'
        });
      }
    }
  })
})

//请求信息
router.get('/xjh', function(req, res, next) {

  infomodel.find(function(err,doc){
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
  var info = {
    userName:req.body.userName
  };
  infomodel.deleteOne({
    userName:info.userName
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