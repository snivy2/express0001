var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var guanmodel = require('../models/guanliyuan.js');


router.post('/xjh',function(req,res,next){                        
  var userlogin =  {
    userName:req.body.userName,
    userPwd:req.body.userPwd,
  }                //获取post上来的 data数据中 username的值
  guanmodel.findOne({userName:userlogin.userName},function(err,data){   //通过此model以用户名的条件 查询数据库中的匹配信息
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