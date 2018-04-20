var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(6, calculator.runningTotal);
  })

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick('7');
    calculator.numberClick('2');
    calculator.operatorClick('*');
    calculator.numberClick('2');
    calculator.operatorClick('=');
    assert.equal(144, calculator.runningTotal);
  })

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick('3');
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal);
  })

  it('can take in numbers to make a running total', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    assert.equal(2, calculator.runningTotal);
    calculator.numberClick(5);
    assert.equal(25, calculator.runningTotal);  //  has concatenated the nums
  })

  it('can can in operators and store them', function(){
    calculator.clearClick();
    assert.equal(null, calculator.previousOperator);
    calculator.operatorClick('+');
    assert.equal('+', calculator.previousOperator);
    calculator.operatorClick('-');
    assert.equal('-', calculator.previousOperator);
    calculator.operatorClick('*');
    assert.equal('*', calculator.previousOperator);
    calculator.operatorClick('/');
    assert.equal('/', calculator.previousOperator);
  })

  it('sets total to 0 when clear Clicked, if total of 0 clear Click resets operator', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('+');
    assert.equal(4, calculator.runningTotal);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
    calculator.clearClick();
    assert.equal(null, calculator.previousOperator);
  })

});
