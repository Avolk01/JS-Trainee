// 2.13
// 1) // 1
// 2.1) 1, 2, 3, 4
// 2.2) 1, 2, 3, 4, 5
// 3.1) 0, 1, 2, 3, 4 // i++
// 3.2) 0, 1, 2, 3, 4 // ++i
// 4)
for (var i = 2; i <= 10; i+=2)
    console.log(i);
// 5)
/* 
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/   
var i = 0;
while(i<3){
    console.log( `number ${i}!` );
    i++;
} 

// 6)
while(true){
    var num = Number(prompt("Введите число", ""));
    if(num == null || num > 100)
        break;
    console.log( `Вы ввели число ${num}`);
}

var n = prompt("Введите N","")
for(var i = 2; i <= n; i++){
    var isPrime = true;
    for(var j = 2; j <= Math.sqrt(i); j++){
        if(i%j == 0){
            isPrime = false
            break;
        }
    }
    if(isPrime)
        console.log(i);
}

// 2.14
// 1)
var browser = "Edge";
if(browser == 'Edge') {
    console.log("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox'
   || browser == 'Safari' || browser == 'Opera') {
    console.log( 'Okay we support these browsers too' );
} else {
    console.log( 'We hope that this page looks ok!' );
}

const number = Number(prompt('Введите число между 0 и 3', ''));

// 2)
switch (number) {
  case 0:
    console.log('Вы ввели число 0');
    break;

  case 1:
    console.log('Вы ввели число 1');
    break;

  case 2:
  case 3:
    console.log('Вы ввели число 2, а может и 3');
    break;
}

// 2.15
// 1) // одинаковые
// 2) 
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/

function checkAge(age){
    return age > 18 ? true: confirm('Родители разрешили?');
    // return age > 18 || confirm('Родители разрешили?');
}
// 3)
function min(a,b){
    return a < b ? a : b;
}

//4)
function pow(a,b){
    var res = 1;
    for(var i = 0; i<b; i++)
        res*=a;
    return res;
}

console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(1,100));

// 2.16

// 2.17
// 1)
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask("Вы согласны?", () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );