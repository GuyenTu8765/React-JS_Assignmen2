"use strict";
exports.__esModule = true;
exports.question3 = exports.question2 = exports.question1 = void 0;
function question1() {
    var fullName = "Nguyen Van Tu";
    var age = 21;
    var content = "T\u00F4i t\u00EAn l\u00E0 ".concat(fullName, " n\u0103m nay ").concat(age, " tu\u1ED5i, \u0111ang \u1EBF!");
    console.log(content);
}
exports.question1 = question1;
function question2() {
    var a = 5;
    var b = 20;
    var content = "T\u1ED5ng c\u1EE7a ".concat(a, " v\u00E0 ").concat(b, " l\u00E0 ").concat(a + b);
    console.log(content);
}
exports.question2 = question2;
function question3() {
    var food = [
        {
            food: "1. Chả giò nón lá"
        },
        {
            food: "1. Bò lúc lắc hạt điều"
        },
        {
            food: "1. Cá tai tượng chiên xù"
        },
        {
            food: "1. Cải thìa sốt thịt cua"
        },
        {
            food: "1. Cơm chiên cá mặn"
        },
        {
            food: "1. Lẩu hải sản"
        },
        {
            food: "1. Rau câu"
        }
    ];
    food.map(function (food, key) {
        var result = "\n        <div>\n            <h1>".concat(food.food, "</h1>\n        </div>\n        ");
        console.log(result);
    });
}
exports.question3 = question3;
exports["default"] = { question1: question1, question2: question2, question3: question3 };
