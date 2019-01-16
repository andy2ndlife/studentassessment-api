var constants = require('../lib/constants')
var tuc = require('temp-units-conv');

function QuestionAnswer() {
    this.inputVal = '';
    this.inputUnit  = '';
    this.targetUnit = '';
    this.response  = '';
    this.output  = '';
    this.grade  = '';
}

QuestionAnswer.prototype.getInputVal = function() {
    return this.inputVal;
}

QuestionAnswer.prototype.setInputVal = function(inputVal) {
    if(isNaN(inputVal)) {
        this.grade  = constants.RESPONSE.I;
    }
    this.inputVal = inputVal;
}

QuestionAnswer.prototype.getInputUnit = function() {
    return this.inputUnit;
}

QuestionAnswer.prototype.setInputUnit = function(inputUnit) {
    this.inputUnit = inputUnit;
}

QuestionAnswer.prototype.getTargetUnit = function() {
    return this.targetUnit;
}

QuestionAnswer.prototype.setTargetUnit = function(targetUnit) {
    this.targetUnit = targetUnit;
}

QuestionAnswer.prototype.getResponse = function() {
    return this.response;
}

QuestionAnswer.prototype.setResponse = function(response) {
    if(isNaN(response)) {
        this.grade  = constants.RESPONSE.I;
    }
    this.response = response;
}

QuestionAnswer.prototype.getOutput = function() {
    if((this.grade != constants.RESPONSE.I) && (this.inputUnit !== this.targetUnit)) {
        let inputValInCelsius = 0;
        let expectedOutputVal = 0;

        //Convert input value to Celsius if it's unit is NOT Celsius
        switch(this.inputUnit) {
            case "F":
                inputValInCelsius = tuc.fahrenheitToCelsius(this.inputVal);
                console.log('F to C ',inputValInCelsius);
                break;
            case "K":
                inputValInCelsius = tuc.k2c(this.inputVal);
                console.log('K to C ',inputValInCelsius);
                break;
            case "R":
                inputValInCelsius = (this.inputVal - 491.67) * (5/9);
                console.log('R to C ',inputValInCelsius);
                break;
            case "C":
                inputValInCelsius = this.inputVal;
                break;
        }

        //Convert inputValInCelsius to target unit
        switch(this.targetUnit) {
            case "F":
                expectedOutputVal = tuc.c2f(inputValInCelsius);
                break;
            case "K":
                expectedOutputVal = tuc.celsiusToKelvin(inputValInCelsius);
                break;
            case "R":
                expectedOutputVal = (inputValInCelsius * 9/5) + 491.67;
                break;
            case "C":
                expectedOutputVal = inputValInCelsius;
                break;
        }

        console.log('expectedOutputVal ',expectedOutputVal);
        console.log('input ',this.inputVal);
        if(parseFloat(expectedOutputVal) !== parseFloat(this.response)) {
            this.grade  = constants.RESPONSE.W;
        } else {
            this.grade  = constants.RESPONSE.C;
        }

        return expectedOutputVal;
    } else {
        return this.inputVal;
    }
}

QuestionAnswer.prototype.getResult = function() {
    return {
        "inputVal" : this.inputVal,
        "inputUnit" : this.inputUnit,
        "targetUnit" : this.targetUnit,
        "response" : this.response,
        "output" :  this.getOutput(),
        "flag" :  this.grade
    };
};

module.exports = QuestionAnswer; 