var express = require('express');
QaModel = require('../models/questionAnswer')

var router = express.Router();

/* POST request for assessment*/
router.post('/', function(req, res, next) {
    var assessmentArr = [];
    console.log('req.body.assessmen ',req.body.assessment)
    for (let qaSet of req.body.assessment) {
        var qaModelObj = new QaModel();
        qaModelObj.setInputVal(qaSet.inputVal);
        qaModelObj.setInputUnit(qaSet.inputUnit);
        qaModelObj.setTargetUnit(qaSet.targetUnit);
        qaModelObj.setResponse(qaSet.response);
        
        assessmentArr.push(qaModelObj);
    }

    var resultsArr = [];
    for (let result of assessmentArr) {
        resultsArr.push(result.getResult());
    }
    res.status(200);
    res.json({
        "studentname" : req.body.studentname,
        "assessment" : resultsArr
    });
});

module.exports = router;