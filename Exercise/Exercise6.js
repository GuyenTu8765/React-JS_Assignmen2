"use strict";
exports.__esModule = true;
exports.question2 = exports.question1 = void 0;
function question1() {
    // function callAPICreateUser(data, status) {
    //     if (status == "error") {
    //         console.log("Loi khi call API Create User");
    //         console.log("End!");
    //     } else {
    //         return new Promise(function (resolve, reject) {
    //             console.log("call API Create User!");
    //             resolve("Create User successfully!");
    //         });
    //     }
    // }
    // function callAPICreateGroup(data, status) {
    //     if (status == "error") {
    //         console.log("Loi khi call API API Create Group");
    //         console.log("End!");
    //     } else {
    //         return new Promise(function (resolve, reject) {
    //             console.log("call API Create Group!");
    //             resolve("Create Group successfully!");
    //             // reject("Group Name is Exists!");
    //         });
    //     }
    // }
    // function callAPIAddUserToGroup(data, status) {
    //     return new Promise(function (resolve, reject) {
    //         console.log("call API Add User To Group!");
    //         resolve("Add User To Group successfully!");
    //         console.log("End!");
    //     });
    // }
    // callAPICreateUser("data", "success")
    //     .then(function (message) {
    //         console.log(message);
    //         return callAPICreateGroup("data", "success");
    //     })
    //     .then(function (message) {
    //         console.log(message);
    //         return callAPIAddUserToGroup("data", "success");
    //     })
    //     .then(function (message) {
    //         console.log(message);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}
exports.question1 = question1;
function question2() {
    function asyncPromise1() {
        return new Promise(function (resolve, reject) {
            resolve("asyncPromise1");
        });
    }
    function asyncPromise2() {
        return new Promise(function (resolve, reject) {
            resolve("asyncPromise2");
        });
    }
    function asyncPromise3() {
        return new Promise(function (resolve, reject) {
            resolve("asyncPromise3");
        });
    }
    function asyncPromise4() {
        return new Promise(function (resolve, reject) {
            resolve("asyncPromise4");
        });
    }
    function asyncRecovery1() {
        return new Promise(function (resolve, reject) {
            reject("asyncRecovery1");
        });
    }
    function asyncRecovery2() {
        return new Promise(function (resolve, reject) {
            reject("asyncRecovery2");
        });
    }
    asyncPromise1()
        .then(function (message) {
        console.log(message);
        return asyncPromise2();
    })
        .then(function (message) {
        console.log(message);
        return asyncPromise3();
    })["catch"](function (error) {
        return asyncRecovery1();
    })
        .then(function (message) {
        console.log(message);
        return asyncPromise4();
    }, function (error) {
        console.log(error);
        return asyncRecovery2();
    })["catch"](function (error) {
        console.log(error);
        console.log('Dung lo lang gi ca!');
    })
        .then(function () {
        console.log("xong!");
    });
}
exports.question2 = question2;
exports["default"] = { question1: question1, question2: question2 };
