"use strict";
// 6.6)
// 1)
function makeCounter() {
    let count = 0;  
    function counter() {
      return count++;
    }  
    counter.set = function(value) { count = value; };  
    counter.decrease = function() { count--; };  
    return counter;
}

// 2) 
function sum(a) {
    let sum = a;
    function next(b) {
        sum +=  b;
        return next;
    }
    next.toString = () => sum;
    return next;
}

// 6.8)
// 1)
// 1.1)
function printNumbers1(from, to) {
    let count = from;
    let timerId = setInterval(function tick() {
        if(count >= to)
            clearInterval(timerId);
        console.log(`6.8.1.1:   ${count}`);
        count++;
    }, 1000)
}

// 1.2)
function printNumbers2(from, to) {
    let count = from;
    setTimeout(function printElem() {
        console.log(`6.8.1.2:   ${count}`);
        if(count < to)        
            setTimeout(printElem, 1000);        
        count++;
    }, 1000);
}

function task681() {
    printNumbers1(1,5);
    //printNumbers2(6,10);
}

// 2) // будет выведено последнее значение i - 100000000, тк setTimeout выполняется после текущего кода
function task682() {
    let i = 0;
    setTimeout(() => console.log(`6.8.2:     ${i}`), 100);
    // предположим, что время выполнения этой функции >100 мс
    for(let j = 0; j < 100000000; j++)
        i++;    
}

// 6.9)
// 1)
function spy(func) {
    wrapper.calls = [];
    function hash(args) {
        return ([].join.apply(args));
    }      
    function wrapper(...args) {
        let key = hash(args);        
        wrapper.calls.push(key);
        return func.apply(this, args);        
    }
    return wrapper;
}

function work(a, b) {
    console.log(`6.9.1:     ${a + b}` ); // произвольная функция или метод
}



function task691() {
    work = spy(work);
    work(1, 2); // 3
    work(4, 5); // 9  
    for (let args of work.calls) {
        console.log(  '6.9.1:     call:' + args); // "call:1,2", "call:4,5"
}
}
// 2)
function f(x) {
    console.log(`6.9.2:     ${x}`);
}

function delay(func, ms) {
    function wrapper() {
        return setTimeout(() => func.apply(this, arguments), ms);
    }
    return wrapper;
}

function task692() {
    // создаём обёртки
    let f1000 = delay(f, 1000);
    let f1500 = delay(f, 1500);  
    f1000("test"); // показывает "test" после 1000 мс
    f1500("test"); 
}

// 3)
function debounce(func, ms) {
    let flag = true;

    function help() {
        flag = true;
    }

    function wrapper() {
        if(flag){
            flag = false;
            setTimeout(help, ms);
            return func.apply(this, arguments); 
        }
        else
            return null;
    }
    return wrapper;
}

function forDebounce(x) {
    console.log(`6.9.3:     ${x}`);
}

function task693() {
    let ff = debounce(forDebounce, 1000);
    ff(1); // выполняется немедленно
    ff(2); // проигнорирован
    setTimeout( () => ff(3), 100); // проигнорирован (прошло только 100 мс)
    setTimeout( () => ff(4), 1100); // выполняется
    setTimeout( () => ff(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
    setTimeout( () => ff(6), 2500);
}

// 4)
function throttle(func, ms) {  
    let isOpen = true;
    let temp = null;
    let args = null;

    function wrapper() {
        if (!isOpen) { 
            args = arguments;
            temp = this;
            return null;
        }      
        func.apply(this, arguments);      
        isOpen = false;      
        setTimeout(function() {
            isOpen = true; 
            if (args != null) {
              wrapper.apply(temp, args);
              args = null; 
              temp = null;
            }
        }, ms);
    }

    return wrapper;
}

function task694() {

    function f(a) {
        console.log(`6.9.4:     ${a}`);
    }

    // f1000 передаёт вызовы f максимум раз в 1000 мс
    let f1000 = throttle(f, 1000);
      
    f1000(1); // показывает 1
    f1000(2); // (ограничение, 1000 мс ещё нет)
    f1000(3); // (ограничение, 1000 мс ещё нет)      
}

// для прикола, тк запускать кучу всего с таймерами это ужас
function main() {
    task681();
    setTimeout(task682, 6000);
    setTimeout(task691, 7000);
    setTimeout(task692, 8000);
    setTimeout(task693, 10000);
    setTimeout(task694, 13000);
}

main();