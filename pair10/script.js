// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
// names.pop();
// names.unshift("Pavlo");
// names.shift();
//
// let names2 = names.slice(1, 3);
//
// console.log(names);
// console.log(names2);
//
// let deleted = names.splice(2, 1);
// console.log(deleted);
//
// names.splice(1, 0, "Seva");
// names.splice(0, 1, "Tetiana", "Nadiia");
// console.log(names);

// function register(name) {
//     if (name.trim() === "") {
//         alert("Please enter your name");
//         return;
//     }
//     let exists = false;
//     for (let i = 0; i < event.length; i++) {
//         if (event[i] === name) {
//             exists = true;
//         }
//     }
//     if (exists) {
//         alert("Учасник вже зареєстрований " + name);
//         return;
//     }
//     event.push(name);
//     alert(`Зареєстровано учасника: ${name}`);
// }
// function remove(name) {
//     let index = -1
//     for (let i = 0; i < event.length; i++) {
//         if (event[i] === name) {
//             index = i;
//             break
//         }
//     }
//     if (index === -1) {
//         alert("Такого учасника немає")
//     }
//     else{
//         event.splice(index, 1);
//         alert("Учасника видалено")
//     }
//
//
//
//
// }
// function count(){
//     alert(`Всього учасників: ${event.length}`);
// }
// let event = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
//
//
// register("Slavik");
// register("Ann");
// register("        ");
// remove("Slavik");
// count();


// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];

// for (let i = 0; i < event.length; i++) {
//     console.log(event[i]);
// }

// for(let name of names) {
//     console.log(name);
// }

// names.forEach(function (name,index){
//     console.log(name, index);
// })



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//HHHHHHOOOOOOOOOOOOOOOOOOMEEEWWWWWWWWWWWWWWWWWWWWOOOOOOOOOOOOORKKKK//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// let names = ["Марія", "Олександра", "Влад", "Іван", "Павло"];
// names.push("Влад")
// names.unshift("Всеволод")
// names.pop()
// names[2] = "Єгор"
//
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i], i + 1)
// }
//
// for(let name of names) {
//     console.log(name)
// }
//
// names.forEach(function(name, index) {
//     console.log(name, name.length)
// })

////////222222222222222222222222222222222222222222
let prices = [120, 250, 180, 300, 150, 400];
let sum = 0
let count = 0;
for(let price of prices){
    sum += price;
    if(price >= 200){
        count++;
    }



}
// for (let i = 0; i < prices.length; i++) {
//     sum += prices[i];
//
//     if (prices[i] >= 200) {
//         count++;
//     }
// }
//
// prices.forEach(function(price, index) {
//     sum += price;
//     if (price >= 200) {
//         count++;
//     }
// })


let avg = sum / prices.length;
console.log(sum);
console.log(count);
console.log(avg);









