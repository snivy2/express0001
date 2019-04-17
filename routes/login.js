var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var loginmodel = require('../models/login.js');

/* mongoose.connect('mongodb://127.0.0.1:27017/gaytest',{ useNewUrlParser: true } );
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});
 */
// 注册的post请求

router.post('/add',function(req, res, next){
  var user = {
    userName:req.body.userName,
    userPwd:req.body.userPwd,
  }
  loginmodel.findOne({userName:user.userName},function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    }
    if(data){
      if(data.userName === user.userName){
        return res.json({
          status:"401",
          msg:"用户名已存在"
        })
      }
    }
    new loginmodel(user).save(function (err,user) {
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


// 登陆的post请求

router.post('/xjh',function(req,res,next){                        
  var userlogin =  {
    userName:req.body.userName,
    userPwd:req.body.userPwd,
  }                //获取post上来的 data数据中 username的值
  loginmodel.findOne({userName:userlogin.userName},function(err,data){   //通过此model以用户名的条件 查询数据库中的匹配信息
      if(err){                                         //错误就返回给原post处
        return res.json({
          status:"400",
          msg:err.message
        });
      }else if(!data){    
        return res.json({
          status:"406",
          msg:err.message
        })                       
      }else{ 
          if(req.body.userPwd != data.userPwd){     //查询到匹配用户名的信息，但相应的password属性不匹配
            return res.json({
              status:"509",
              msg:err.message
            })
          //    res.redirect("/login");
          }else{                                     //信息匹配成功
            return res.json({
              status:"200",
              msg:'ok',
              result:userlogin
            })
          }
      }
  });
});

module.exports = router;