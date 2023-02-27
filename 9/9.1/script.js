"use strict";
import { ExtendedClock } from "./extended-clock.js";
// 9.1
// 1)
class Clock {
    template = "";
    timer;

    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
  
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
  
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);  
        console.log(output);
    }   

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();
clock.stop();

// 9.2
// 1) // ошибка в том, что не вызывается super()
class Animal {
    constructor(name) {
      this.name = name;
    } 
}
    
class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        this.created = Date.now();
    }
}
  
let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);

var ec = new ExtendedClock({template: "h:m:s", precision: 2000});
ec.start();
ec.stop();

// 9.6
// 1) // работает, тк не учитывается A, но учитывается A.prototype
function A() {}
function B() {}

A.prototype = B.prototype = {};
let a = new A();
console.log( a instanceof B ); // true
