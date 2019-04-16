var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var newmodel = require('../models/news.js');

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

router.get('/add1',function(req, res, next){
  return res.json({
    status:"200",
    msg:'ok'
  })
})


// 管理员发布新闻
router.post('/add',function(req, res, next){
  var news = {
    newsName:req.body.newsName,
    newsDate:req.body.newsDate,
    newsTitle:req.body.newsTitle,
    newsText:req.body.newsText
  }
  newmodel.findOne({newsTitle:news.newsTitle},function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    }
    if(data){
      if(data.newsTitle === news.newsTitle){
        return res.json({
          status:"401",
          msg:"新闻已经存在"
        })
      }
    }
    new newmodel(news).save(function (err,user) {
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

// 用户获取新闻

router.get('/xjh', function(req, res, next) {
  newmodel.find(function(err,doc){
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