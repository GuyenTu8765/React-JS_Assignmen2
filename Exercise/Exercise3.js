"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.question3 = exports.question2 = exports.question1 = void 0;
function question1() {
    var number = [2, 4, 6, 8, 10];
    var newNumber = __spreadArray(__spreadArray([], number, true), [5, 7, 9], false);
    console.log(newNumber);
    return newNumber;
}
exports.question1 = question1;
function question2() {
    var newArr = question1();
    console.log(newArr, 'newArr');
}
exports.question2 = question2;
function question3() {
    var cold = ["autumn", "winter"];
    var warm = ["spring", "summer"];
    var seasons = __spreadArray(__spreadArray([], cold, true), warm, true);
    console.log(seasons);
}
exports.question3 = question3;
exports["default"] = { question1: question1, question2: question2, question3: question3 };
