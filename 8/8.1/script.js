"use strict";
// 8.1 
// 1)
let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};
  
console.log( rabbit.jumps ); // true  
delete rabbit.jumps;  
console.log( rabbit.jumps ); // null  
delete animal.jumps;  
console.log( rabbit.jumps ); // undefined

// 2)
let head = {
    glasses: 1
};
  
let table = {
    __proto__:head,
    pen: 3
};
  
let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};
  
let pockets = {
    __proto__: bed,
    money: 2000
};

// 3)
let animal3 = {
    eat() {
      this.full = true;
    }
};
  
let rabbit3 = {
    __proto__: animal3
};
  
rabbit3.eat(); // full получит rabbit3 
              //тк this привязывается к нему (функция вызывается внутри rabbit)

// 4) // не работает тк у них общий живот. Необходимо каждому сделать свой
let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
};
  
let speedy = {
    stomach: [],
    __proto__: hamster
};
  
let lazy = {
    stomach: [],
    __proto__: hamster
};
  
// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple
  
// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple

// 8.2
// 1)
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit1 = new Rabbit();

console.log( rabbit1.eats ); // true
// 1) - true 2) - false 3) true 4) undefined

// 2)
// правильный пример
function User(name) {
    this.name = name;
}  
var admin = new User("Admin");
var quest = new admin.constructor("Quest");
console.log( quest.name );

// неправильный
User.prototype = {};
var admin1 = new User("Admin1");
var quest1 = new admin1.constructor("Quest1");
console.log( quest1.name );

// 8.3
// 1)
Function.prototype.defer = function(ms) {
    setTimeout(this, ms); // вроде должно работать
};

// 2)
Function.prototype.defer = function (ms) {
    return (...args) => setTimeout(this, ms, ...args);
};

function f(a, b) {
    console.log( a + b );
}
  
f.defer(1000)(1, 2);

// 8.4
// 1)
var dictionary = Object.create(null, {
    toString: { value() { 
          return Object.keys(this).join(", ");
        }}
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"

// 2) 
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert(this.name);
};
  
let rabbit4 = new Rabbit("Rabbit");
  
rabbit4.sayHi();                            // Rabbit
Rabbit.prototype.sayHi();                   // undefined, тк прототип не знает имени кролика, а this в этом случае равен Rabit.prototype
Object.getPrototypeOf(rabbit4).sayHi();     // аналогично
rabbit4.__proto__.sayHi();                  // аналогично