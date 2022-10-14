export function question1() {

    var number: number[] = [2, 4, 6, 8, 10];
    var newNumber: number[] = [...number, 5, 7, 9];
    console.log(newNumber);
     return newNumber

}

export function question2() {
     var newArr = question1()
     console.log(newArr , 'newArr')
}

export function question3() {

    var cold: string[] = ["autumn", "winter"];
    var warm: string[] = ["spring", "summer"];
    var seasons: string[] = [...cold,...warm];

    console.log(seasons);
    


}
export default { question1, question2, question3 }