const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    const money = [
        {
            price: 25,
            num: 0,
        },
        {
            price: 10,
            num: 0,
        },
        {
            price: 5,
            num: 0,
        },
        {
            price: 1,
            num: 0,
        }
    ]

    let target = Number(input[i]);
    for (let j = 0; j < 4; j++) {
        money[j].num = parseInt(target / money[j].price);
        target = target % money[j].price;
    }
    console.log(money.map(e => e.num).join(" "));
}

