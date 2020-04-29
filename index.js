'use strict';
/**
* 配列に含まれる整数が 17 で割り切れるものだけにする
* @param {int} number
*/
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
  }
  
  module.exports = {
    isMultipleOfSeventeen
  };
