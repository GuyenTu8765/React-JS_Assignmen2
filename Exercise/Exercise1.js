"use strict";
exports.__esModule = true;
exports.question2 = exports.question1 = void 0;
function question1() {
    var date = [2018, 12, 8];
    var year = date[0], month = date[1], day = date[2];
    console.log(year);
    console.log(month);
    console.log(day);
}
exports.question1 = question1;
function question2() {
    var person = {
        firstName: "nguyen",
        lastName: "a",
        age: 20
    };
    var f = person.firstName, l = person.lastName, a = person.age;
    console.log(f);
    console.log(l);
    console.log(a);
}
exports.question2 = question2;
exports["default"] = { question1: question1, question2: question2 };
