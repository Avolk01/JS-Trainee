"use strict";
let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // заканчиваем отсчёт времени

console.log( `Цикл отработал за ${end - start} миллисекунд` );

// 5.11
// 1)
var d = new Date(2012, 1, 20, 3, 12);
console.log( d );

// 2)
function getWeekDay(date) {
  var day = date.getDay();
  switch(day){
    case 0: return "ВС";
    case 1: return "ПН";
    case 2: return "ВТ";
    case 3: return "СР";
    case 4: return "ЧТ";
    case 5: return "ПТ";
    case 6: return "СБ";
  }
}

// 3)
function getLocalDay(date) {
  var day = date.getDay();
  return day > 0 ? day : 7 
}

// 4)
function getDateAgo(date, days) {
  return new Date(date - (days * 24 * 60 * 60 * 1000)).getDate();
}

// 5)
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// 6)
function getSecondsToday() {
  var now = new Date();
  return Math.round((now - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 1000);
}

// 7)
function getSecondsToTomorrow() {
  return 24 * 60 * 60 - getSecondsToday();
}

// 8)
function formatDate(date) {
  var diff = new Date() - date;
  var res = "";
  if (diff < 1000)
    res = "прямо сейчас";
  else if (diff < 60 * 1000)
    res = `${Math.round(diff / 1000)} сек. назад`;
  else if (diff < 60 * 60 * 1000)
    res = `${Math.round(diff / 1000 / 60)} мин. назад`;
  else{
    var d = date.getDate();
    var m = date.getMonth() + 1;
    res = (`${d > 9 ? d : "0" + d}.${m > 9 ? m : "0" + m}.${date.getFullYear() % 100} ${date.getHours()}:${date.getMinutes()}`);
  }
  return res;
}

// 5.12

// 1)
let user = {
  name: "Василий Иванович",
  age: 35
};
var str = JSON.stringify(user);
console.log(str);
var user1 = JSON.parse(str);
console.log(user1);

// 2)
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (value == meetup && key != ""  ) ? undefined : value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/