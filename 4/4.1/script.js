"use strict"
// 4.1
// 1)
var user = {};
user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete";
for(var key in user)
    console.log(user[key]);
delete user.name;

// 2)
function isEmpty(obj){
    var count = 0;
    for(var key in obj)
        count++;
    return count == 0;
}
console.log(isEmpty(user));
var user1 = {};
console.log(isEmpty(user1));

// 3) // можно менять константный объект

// 4)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(salariesSum(salaries));

function salariesSum(salary) {
    var res = 0;
    if(isEmpty(salary))
        return 0;
    for(var name in salary)
        res += salary[name];
    return res;
}

// 5)
mult2NumField(salaries);
console.log(salariesSum(salaries));
function mult2NumField(obj) {
    for(var key in obj)
        if(typeof(obj[key]) == "number")
            obj[key] = obj[key] * 2;        
}

// 4.4
// 2)
let calculator = {
  first: 0,
  second: 0,

  read(num1, num2) {
    this.first = num1;
    this.second = num2;
  },

  read1() {
    this.first = +prompt();
    this.second = +prompt();
  },

  sum() {
    return this.first + this.second;
  },

  mul() {
    return this.first * this.second;
  }
  
};
calculator.read(123, 234);
console.log( calculator.sum() );
console.log( calculator.mul() ); 

// 3)
/**
 * let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
*/

let ladder = {
    step: 0,
    up() {
      this.step++;
      return ladder;
    },
    down() {
      this.step--;
      return ladder;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return ladder;
    }
};

ladder.up().up().down().showStep().down().showStep(); 

// 4.5
// 1)
//
var temp = { name: "Artem"};
function A() { return temp; }
function B() { return temp; }
console.log( new A() == new B() ); // true

// 2)
function Calculator() {

  this.read = function() {
    this.first = +prompt();
    this.second = +prompt();
  };

  this.sum = function() {
    return this.first + this.second;
  };

  this.mul = function() {
    return this.first * this.second;
  };
  
};
var calc = new Calculator();

// 3)
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    var val = +prompt("Input number");
    this.value += val;
  }
};
let accumulator = new Accumulator(1);

accumulator.read(); 
accumulator.read(); 

console.log(accumulator.value);
