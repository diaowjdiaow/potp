var express = require('express');
var router = express.Router();
var Mongo = require("mongodb-curd");
var batabaseName = "record";
var collcationName = "pay";
/* GET home page. */
router.get('/find', function(req, res, next) {
    Mongo.find(batabaseName, collcationName, data, function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    }, {
        skip: 0,
        limit: 0
    })
});

router.post('/insert', function(req, res, next) {
    var data = req.body;
    console.log(data);
    Mongo.insert(batabaseName, collcationName, data, function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    })
});

module.exports = router;