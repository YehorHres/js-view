// let prices = [120, 23, 45]
// console.log(prices[1])
// prices[1] = 50;
//
// console.log(prices.length)
//
// let suma = 0;
// for(let i = 0; i<prices.length; i++){
//     console.log(prices[i])
//     suma += prices[i]
// }


// function getTotalPrices(prices) {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//     }
//     return sum;
// }
// let prices = [120, 23, 45, 60, 55];
// let limit = 50;
// let result = getTotalPrices(prices);
// console.log(result);
//
/////////////////////////////////////////////////////////////////////////////////////////
//
// let count = 0;
// function LimPrices(prices) {
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > 50) {
//             count++
//         }
//
//     }
//     return count;
//
// }
//
// let res = LimPrices(prices);
// console.log(res);



let kt = +prompt("k-t");
let numbers = [-23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23,-23, -23, -23, -23, -23, -23, -23, -23, -23];

for (let i = 0; i < kt; i++) {
    let num = +prompt("Введи число");
    numbers[i] = num;
}
console.log(numbers);

let parni = "";
for (let i = 0; i < kt; i++) {
    if (numbers[i] % 2 === 0) {
        parni += numbers[i] + " ";
    }
}

console.log(parni);