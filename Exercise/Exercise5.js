"use strict";
exports.__esModule = true;
exports.question3 = exports.question2 = exports.question1 = void 0;
function question1() {
    console.log("Que1----------------------------");
    function multiply(a, b) {
        if (b === void 0) { b = 1; }
        console.log(a * b);
    }
    multiply(5, 3);
}
exports.question1 = question1;
function question2() {
    console.log("Que2----------------------------");
    var multiply = function (a, b, c) {
        if (b === void 0) { b = 1; }
        if (c === void 0) { c = 1; }
        return console.log(a * b * c);
    };
    multiply(5, 3, 2);
}
exports.question2 = question2;
function question3() {
    console.log("Que3----------------------------");
    var printInformation = function (name, email) {
        if (email != undefined) {
            var content = "T\u00F4i l\u00E0 ".concat(name, ". Email c\u1EE7a t\u00F4i l\u00E0 ").concat(email);
            console.log(content);
        }
        else {
            var content = "T\u00F4i l\u00E0 ".concat(name, ". T\u00F4i ch\u01B0a c\u00F3 Email");
            console.log(content);
        }
    };
    printInformation("Name", "Namvv20@gmail.com");
}
exports.question3 = question3;
exports["default"] = { question1: question1, question2: question2, question3: question3 };
