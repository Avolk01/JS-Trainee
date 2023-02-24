"use strict"

// 5.1

// 1)
/**
* 
let str = "Привет";
str.test = 5;
alert(str.test);
*/  // ошибка, тк str - примитив (не объект)

// 5.2
// 1)
function sum() {
    var first = +prompt("first", "");
    var second = +prompt("second", "");
    console.log(first + second);
}

// 2)
// alert( 6.35.toFixed(1) ); // 6.3 порешность хранения дробей
console.log(Math.round(6.35 * 10) / 10);

// 3)
function readNumber() {
    var res;
    while (!isFinite(res)) {
        res = prompt();
        if (res == "" || res == null) 
            return null;  
    }
    return +res;
}

// 4) // не завершится, тк из-за погрешности i не будет строго равно 10

// 5)
function randomFloatNumber(min, max) {
    return min + (max-min) * Math.random();
    
}

console.log(randomFloatNumber(1, 5));
console.log(randomFloatNumber(1, 5));
console.log(randomFloatNumber(1, 5));

// 6)
function randomIntNumber(min, max) {
    return Math.round(randomFloatNumber(min - 0.5, max + 0.5));
}

console.log(randomIntNumber(1, 10));
console.log(randomIntNumber(1, 10));
console.log(randomIntNumber(1, 10));

// 5.3
// 1)
function ucFirst(str) {
    if(str.length == 0)
        return "";
    if(str.length == 1)
        return str[0].toUpperCase();
    return str[0].toUpperCase() + str.slice(1);
}

// 2)
function checkSpam(str) {
    str = str.toLowerCase();
    if(str.includes("viagra") || str.includes("xxx"))
        return true;
    return false;
}

// 3)
function truncate(str, maxlength) {
    if(str.length > maxlength)
        return str.slice(0,maxlength-1) + "…";
    return str;
}

// 4)
function extractCurrencyValue(str) {
    return +str.slice(1);
}

// 5.4
// 1) // 4 тк один объект
 
// 2)
var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length / 2] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Рэгги");
console.log(styles);

// 3)
/**
 * let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // три элемента массива
 */ 

// 4)
function sumInput() {
    var arr = [];
    var sum = 0;
    while(true) {
        var num = +prompt();
        if(num === "" || num === null || !isFinite(num))
            return sum;
        sum += num;
        arr.push(num);
    }
} // использовать массив для галочки это глупо(

// 5)
function getMaxSubSum(arr) {
    var addArr = [];
    addArr.push(0);
    for (var i = 0; i < arr.length; i++) {        
        addArr.push(Math.max(arr[i] + addArr[i], arr[i]));
    }
    var max = 0;
    for (var elem of addArr)
        if (elem > max)
            max = elem;
    return max;
} // O(n)