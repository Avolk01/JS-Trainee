'use strict';

function* pseudoRandom(seed) {
    let cur = seed;
    while (true) {
        cur = cur * 16807 % 2147483647;
        yield cur
    }
}

let generator = pseudoRandom(1);
console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073