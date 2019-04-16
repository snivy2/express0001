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




module.exports = router;