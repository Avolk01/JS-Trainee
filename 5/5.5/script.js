"use strict";
// 5.5
// 1)
function camelize(str) {
    if (str.length == 0)
        return "";
    var temp = str.split("-").map((x, i) => i == 0 ? x : x[0].toUpperCase() + x.slice(1));
    return temp.join("");
}

// 2)
function filterRange(arr, a, b) {
    return arr.filter((elem) => a <= elem && elem <= b );
}

// 3)
function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++)
        if (!(a <= arr[i] && arr[i] <= b)) { 
            arr.splice(i, 1);
            i--;
        }    
}

// 4)
function reverseSort(arr){
    return arr.sort((a, b) => b-a);
}

// 5)
function copySorted(arr) {
    var temp = Array.from(arr);
    return temp.sort();
}

// 6)
function Calculator() {
    this.operators = ["+", "-"];
    this.operations = [(a,b) => a+b, (a,b) => a-b];
    this.calculate = function(str) {
        var temp = str.split(" ");
        if (temp.length != 3)
            return NaN; 
        var op = temp[1];
        var a = +temp[0];
        var b = +temp[2];
        if (isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b))
            return NaN; 
        for (var i = 0; i < this.operations.length; i++)
            if (op == this.operators[i])
                return this.operations[i](a,b);
        
    }

    this.addMethod = function(name, func) {
        this.operators.push(name);
        this.operations.push(func);
    } 
}

// 7) 
function toNameArray(arr){
    return arr.map((elem) => elem.name);
}

// 8)
function toFullNameArray(arr){
    return arr.map((elem, index) => ({fullName: elem.name + " " + elem.surname, id: index}));
}

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];
var usersMapped = toFullNameArray(users);
console.log(usersMapped);

// 9)
function sortAges(arr){
    arr.sort((a, b) =>compare(a.age, b.age));
}

// 10)
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var t = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[t];
        arr[t] = temp;
    }
}

// 11)
function getAverageAge(users) {
    var sum = users.reduce((value, elem) => value + elem.sum, 0);
    return sum / users.length;
}

// 12)
function unique(arr) {
    var res = [];
    for (let str of arr) 
        if (!res.includes(str)) 
          res.push(str);
    return res;     
}

// 13)
function groupById(arr) {
    return arr.reduce((obj, elem) => {
      obj[elem.id] = elem;
      return obj;
    }, {})
  }