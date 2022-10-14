"use strict";
exports.__esModule = true;
exports.question2 = exports.question1 = void 0;
function question1() {
    var functionName = function (a) { return console.log(a + 100); };
    functionName(5);
}
exports.question1 = question1;
function question2() {
    console.log("a)----------------------");
    var functionName1 = function (a, b) { return console.log(a + b + 100); };
    functionName1(5, 10);
    console.log("b)----------------------");
    var functionName2 = function (a, b) {
        var chuck = 42;
        console.log(a + b + chuck);
    };
    functionName2(5, 10);
    console.log("c)----------------------");
    var bob = function (a) { return console.log(a + 100); };
    bob(5);
}
exports.question2 = question2;
exports["default"] = { question1: question1, question2: question2 };
