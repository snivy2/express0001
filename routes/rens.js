var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var rens = require('../models/rens.js');

mongoose.connect('mongodb://127.0.0.1:27017/gaytest',{ useNewUrlParser: true } );
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});


/* api */
router.get('/xjh', function(req, res, next) {
  rens.find(function(err,doc){
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

router.get('/xjh2', function(req, res, next) {
  var studentId = '17';
  rens.findOne({studentId:studentId},function(err,doc){
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
// add
router.post('/add',function(req, res, next){
  var student = {
    studentName:req.body.studentName,
    studentId:'',
    math:req.body.math,
    chinese:'',
    english:''
  }
  rens.findOne({studentName:student.studentName},function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    }
    if(data){
      if(data.studentName === student.studentName){
        return res.json({
          status:"401",
          msg:"用户名已存在"
        })
      }
    }
    new rens(student).save(function (err,user) {
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

// delete
router.post('/del',function(req, res, next){
  var student = {
    studentName:req.body.studentName
  };

  rens.deleteOne({
    studentName:student.studentName
  },function (err,data) {
    if(err){
      return res.json({
        status:"400",
        msg:err.message
      });
    } else {
      return res.json({
        status:"200",
        msg:"学生已删除"
      })
    }
  })
})

// update
router.post('/update',function(req, res, next){
  var student = {
    studentName:req.body.studentName,
    math:req.body.math
  };
  rens.findOneAndUpdate(
    {studentName:student.studentName},{math:student.math}
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
          msg:"学生已修改",
          result:data1

        })
      } else {
        return res.json({
          status:"404",
          msg:'学生不存在'
        });
      }
    }
  })
})


module.exports = router;
