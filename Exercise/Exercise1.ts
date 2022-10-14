export function question1() {
    var date: number[] = [2018, 12, 8];
    var [year, month, day] = date;
    console.log(year);
    console.log(month);
    console.log(day);
}

export function question2() {
    const person = {
        firstName: "nguyen",
        lastName: "a",
        age: 20
    };

    const {firstName: f, lastName: l, age: a} = person;
    console.log(f);
    console.log(l);
    console.log(a);
}




export default { question1, question2 }