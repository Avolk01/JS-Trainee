"use strict";

// 10.1
// 1) первый блок предпочтительнее, тк finally выполняется в любом случае, а код 
//    после блока try catch  может не выполнится в случае ошибки или return 

/**
 * try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
} finally {
  очистить рабочее пространство
}
 */

/**
 * try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
}

очистить рабочее пространство
 */

// 2)
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}
  