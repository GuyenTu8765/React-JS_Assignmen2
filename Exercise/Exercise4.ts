export function question1() {

    var functionName = a => console.log(a + 100);
    functionName(5);
}

export function question2() {

    console.log("a)----------------------");
    var functionName1 = (a, b) => console.log(a + b + 100);
    functionName1(5, 10);

    console.log("b)----------------------");
    var functionName2 = (a, b) => {
        let chuck = 42;
        console.log(a + b + chuck);
    }
    functionName2(5, 10);

    console.log("c)----------------------");
    var bob = (a) => console.log(a + 100);
    bob(5);
}



export default { question1, question2 }