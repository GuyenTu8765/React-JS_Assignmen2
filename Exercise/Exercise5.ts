export function question1() {

    console.log("Que1----------------------------");
    function multiply(a, b: number = 1) {
        console.log(a * b);
    }
    multiply(5, 3);
}

export function question2() {

    console.log("Que2----------------------------");
    var multiply = (a, b: number = 1, c: number = 1) => console.log(a * b * c);
    multiply(5, 3, 2);
}

export function question3() {

    console.log("Que3----------------------------");
    var printInformation = (name: string, email?: string) => {
        if (email != undefined) {
            var content = `Tôi là ${name}. Email của tôi là ${email}`;
            console.log(content);
        } else {
            var content = `Tôi là ${name}. Tôi chưa có Email`;
            console.log(content);
        }
    }
    printInformation("Name", "Namvv20@gmail.com");
}



export default { question1, question2, question3}