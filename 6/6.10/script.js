"use strict";
// 6.10
// 1) // выведется null, тк мы его привязали к функции
function f() {
    console.log( this );
}  
let user = {
    g: f.bind(null)
};  
user.g();

// 2) // Вася, тк привязку нельзя поменять
function f1() {
    console.log(this.name);
}  
f1 = f1.bind( {name: "Вася"} ).bind( {name: "Петя" } );  
f1();

// 3) // undefined, тк бинд создает новый объект
function sayHi() {
    alert( this.name );
}
sayHi.test = 5;
  
let bound = sayHi.bind({
    name: "Вася"
});
  
console.log( bound.test ); 

// 4) // привязываем loginOk loginFail к юзеру
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
  
let user1 = {
    name: 'Вася',
  
    loginOk() {
        console.log(`${this.name} logged in`);
    },
  
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
  
};
  
askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1));

// 5)
function askPassword1(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
  
let user2 = {
    name: 'John',
  
    login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};
  
askPassword1(user2.login.bind(user2, true), user2.login.bind(user2, false));
