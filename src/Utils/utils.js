/**
 * @param {fraction conversion} now 
 */

// обрезание дробного числа до трёх знаков
export const cutNum = (a, b) => {
    let result = (+a / +b).toString().split(".");
    return result[0].concat(".", result[1].slice(0, 3));
  }
