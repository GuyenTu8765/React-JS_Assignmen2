export function question1() {

    var fullName: string = "Nguyen Van Tu";
    var age: number = 21;

    var content = `Tôi tên là ${fullName} năm nay ${age} tuổi, đang ế!`
    console.log(content);

}

export function question2() {

    var a: number = 5;
    var b: number = 20;

    var content = `Tổng của ${a} và ${b} là ${a + b}`;
    console.log(content);

}

export function question3() {
    var food = [
        {
            food: "1. Chả giò nón lá"
        },
        {
            food: "2. Bò lúc lắc hạt điều"
        },
        {
            food: "3. Cá tai tượng chiên xù"
        },
        {
            food: "4. Cải thìa sốt thịt cua"
        },
        {
            food: "5. Cơm chiên cá mặn"
        },
        {
            food: "6. Lẩu hải sản"
        },
        {
            food: "7. Rau câu"
        }
    ];

    food.map(function (food, key) {
        var result = `
        <div>
            <h1>${food.food}</h1>
        </div>
        `;
        
        console.log(result);

    });
}



export default { question1, question2, question3 }

