"use strict";

// 6.1
// 1)
// 1.1
function sumTo1(n) {
    let res = 0;
    for (let i = 0; i < n; i++)
        res += i;
    return res;
}

// 1.2
function sumTo2(n) { // с помощью рекурсии посчитать до 100000 невозможно
    return n == 1? 1 : sumTo2(n-1) + n;
}

// 1.3
function sumTo3(n) { // самый быстрый вариант, тк работает за О(1)
    return (1 + n)*n/2;
}

// 2)
function factorial(n) {
    return n <= 0 ? 1 : factorial(n-1) * n;
}

// 3)
// 3.1 рекурсия медленная
function fib1(n) {
    if (n <= 2)
        return 1;
    return fib1(n-2) + fib1(n-1)
}
console.log(fib1(10));

// 3.2 пацанское решение
function fib(n) {
    let x = 1;
    let y = 1;
    if(n <= 2)
        return x;
    for (let i = 3; i < n; i++) {
        let z = x + y;
        x = y;
        y = z;
    }
    return y;
}
console.log(fib(77));

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

// 4)
// 4.1
function printList1(list) {
    let t = list;
    while (t != null){
        console.log(t.value);
        t = t.next;
    }
}

// 4.2
function printList2(list) {
    if (list == null)
        return;
    console.log(list.value);
    printList2(list.next);
}

// 5)
//5.1
function printListReverse1(list) {
    let t = list;
    let arr = [];
    while (t != null) {
        arr.push(t.value)
        t = t.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) 
        console.log(arr[i]);
}

// 5.2 // меняем порядок выполнения действия и вызова рекурсии 
function printListReverse2(list) {
    if (list == null)
        return;
    printListReverse2(list.next);
    console.log(list.value);    
}

console.log("Simple");
printList1(list);
console.log("Recursive");
printList2(list);
console.log("Simple");
printListReverse1(list);
console.log("Recursive");
printListReverse2(list);

// 6.3)
// 1) // независимы, тк создаются два разных объекта

// 2) // все работает, тк это один объект
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // 1 
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1

// 3) // ошибка, тк функция объявлена внутри if и не видна снаружи

// 4)
function sum(a) { 
    return function (b) {
        return a + b;
    }
}
let a = 2; let b = 3;
console.log(sum(a)(b));
a = -2; b  = 10;
console.log(sum(a)(b));

// 5)
function inBetween(a, b) {
    return function (x) {
        return a <= x && x <= b;
    }
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// 6)
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return function(a,b){
        return a[fieldName] > b[fieldName] ? 1 : -1;
    }
}
users.sort(byField("name"));
console.log(users);
//users.sort(byField("age"));
//console.log(users);
//users.sort(byField("not exist"));
//console.log(users);

// 7) // необходимо сохранять значения i на каждом шаге цикла
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let t = i;
        let shooter = function() { // функция shooter        
            console.log( t ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }
    console.log(shooters);
    return shooters;
}
  
let army = makeArmy();
  
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...