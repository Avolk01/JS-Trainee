"use strict";

// 11.2
// 1) // выведет 1, тк resolve переводит промис в состояние завершения 
//       и передает дальше результат по цепочке
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
});
  
promise.then(console.log());

// 2)
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(), ms);
    });
}
  
delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// 3)
function showCircleButtonOnClick() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
}

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            // не до конца понял этот момент, тк использовал свыше
            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                resolve(div);
            });
        }, 0);
    })
}

// 11.3
// 1)
//  promise.then(f1).catch(f2);
//  Против:
//  promise.then(f1, f2);

// 11.4
// 1) // не выполняется, тк ошибка приходит с задержкой и вызывается без reject
// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("Whoops!");
//     }, 1000);
// }).catch(console.log);

// 11.8
// 1)

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let res = await response.json();
        return res;
    } else {
        throw new Error(response.status);
    }
}     

loadJson('no-such-user.json').catch(console.log); // Error: 404

// 2)
/**
 * class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
 */

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let res = await response.json();
        return res;
    } else {
        throw new HttpError(response);
    }
}


// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");
    let user
    while (true) {
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        }
        catch (error) {
            if (error instanceof HttpError && error.response.status == 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw error;
            }

        }
    }
    console.log(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();

// 3)
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}
  
  function f() {
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
    wait().then((res) => console.log(res)).catch('ne kaef');
}

f();