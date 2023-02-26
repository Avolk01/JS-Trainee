// 5.7
// 1)
function unique(arr) {
    var res = new Set(arr);
    return Array.from(res);
}

// 2)
function aclean(arr) {
    var mp = new Map();
    for (var x of arr)
        mp.set(x.toLowerCase().split("").sort().join(), x);
    return Array.from(mp.values());
}

// 3) добавить Array.from();

//5.8
// 1)
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

var readMsg = new WeakSet();
readMsg.add(messages[0]);
readMsg.add(messages[1]);
readMsg.add(messages[2]);
// messages.pop();

// по идее должно работать
// 2) то же самое, только через WeakMap, чтобы хранить Date

// 5.9
// 1)
function sumSalaries(salaries) {
    var sum = 0;
    for (var salary of Object.values(salaries))
        sum += salary;
    return sum;
}

// 2)
function count(obj) {
    return Object.keys(obj).length;
}

// 5.10
// 1)
let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
var { name: name, years: age, isAdmin: isAdmin = false} = user;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

// 2)
function topSalary(salaries) {
    var max = 0;
    var res = "";
    for (var [name, salary] of Object.entries(salaries))
        if(salary > max){
            max = salary;
            res = name;
        }
    if(res == "")
        return null;
    return res;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};