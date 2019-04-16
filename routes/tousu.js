var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var tousumodel = require('../models/tousu.js');

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


// 用户的留言post请求接口
router.post('/add',function(req, res, next){
  var tousu = {
    tousuName:req.body.tousuName,
    phoneNum:req.body.phoneNum,
    tousuType:req.body.tousuType,
    tousuAdd:req.body.tousuAdd,
    neirong:req.body.neirong
  }
  tousumodel.findOne({tousuAdd:tousu.tousuAdd},function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    }

    new tousumodel(tousu).save(function (err,user) {
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

// 管理员处理留言

router.get('/xjh', function(req, res, next) {
  tousumodel.find(function(err,doc){
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
  var tousu = {
    tousuName:req.body.tousuName
  };

  tousumodel.deleteOne({
    tousuName:tousu.tousuName
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