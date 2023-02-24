alert("Я JavaScript!");
console.log("Я JavaScript!");
var admin;
var name = "John";
admin = name;
console.log(admin);
var weLiveOnPlanet = "The Earth"; // мем - название переменной для нашей планеты
var currentUserName = "Artem"; // название переменной для текущего пользователя


// Типы данных
let newName = "Artem";
console.log( `hello ${1}` );
console.log( `hello ${"name"}` ); // ?
console.log( `hello ${newName}` ); // ?

// alert prompt confirm
var userName = prompt("Как Вас зовут?", "");
console.log("Вас зовут " + userName);

// Операторы Математика
console.log("6" / "2");

// 1
let a = 1, b = 1;
let c = ++a; // a = 2, c = 2
let d = b++; // d = 1, b = 2
// 2
let a1 = 2;
let x = 1 + (a1 *= 2); // a = 4 x = 5
//3
"" + 1 + 0      // "10"
"" - 1 + 0      // -1
true + false    // 1
6 / "3"         // 2
"2" * "3"       // 6
4 + 5 + "px"    // "9px"
"$" + 4 + 5     // "$45"
"4" - 2         // 2
"4px" - 2       // NaN
"  -9  " + 5    // "  -9  5"
"  -9  " - 5    // -14
null + 1        // 1
undefined + 1   // NaN
" \t \n" - 2    // -2

//4
let first = Number(prompt("Первое число?", 1));
let second = Number(prompt("Второе число?", 2));
console.log(first + second); // 3


// Операторы сравнения
5 > 4                   // true
"ананас" > "яблоко"     // false
"2" > "12"              // true
undefined == null       // true
undefined === null      // false
null == "\n0\n"         // false
null === +"\n0\n"       // false

// if 
//1
if ("0") { // true
    console.log( 'Привет' );
}

//2
var nameOfJS = prompt("официальное название JavaScript", "");
if(nameOfJS == "ECMAScript")
  console.log("Верно!");
else
  console.log("Не знаете? “ECMAScript”!");

//3
var num = Number(prompt("Введите число", ""));
var sign = num > 0 ? 1 : num < 0 ? -1 : 0;   
  console.log(sign);

//4
let result;
m = 1; 
n = 2;
if (m + n < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
result = (m + n < 4) ? 'Мало' : 'Много';

//5
let message;
var login ="Нет логина";
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

message = login == 'Сотрудник' ? 'Привет' :
    login == 'Директор' ? 'Здравствуйте' :
    login == '' ? 'Нет логина' : '';


// Логические операторы
// alert( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); // 1 2
// alert( 1 && null && 2 ); // null 
// alert( alert(1) && alert(2) ); // undefined
// alert( null || 2 && 3 || 4 ); // 3
// 6) 14 <= age && age <= 90
// 7.1) 14 > age && age > 90
// 7.2) !(14 <= age && age <= 90)
// 8) первый и третий
// 9)

var login = prompt("Введите логин", "");
if (login == "Админ"){
  var password = prompt("Введите пароль", "");
  if (password == "" || password == null)
    console.log("Отменено");
  else if (password == "Я Главный")
    console.log("Здравствуйте!");
  else
    console.log("Неверный пароль");
}
else if (login == "" || login == null)

  console.log("Отменено");
else
  console.log("Я вас не знаю");
