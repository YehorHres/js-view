let age = +prompt("age");
let day = +prompt("day(1 — будній, 2 — вихідний.)");
let basicPrice;
if (day === 1) {
    basicPrice = 200;
}else if(day === 2) {
    basicPrice = 250;
}else{
    alert("Помилка: неправильний тип дня")
}

let price;
if (age <= 7) {
    basicPrice = "безкоштовно";
}
else if (age > 7 && age <= 17) {
    price = 0.5 * basicPrice;
}else if(age > 18 && age <= 59) {
    price = basicPrice;
}else if(age >= 60) {
    price = 0.6 * basicPrice;

}

console.log(`Вік: ${age}`);
console.log(`День: ${day}`);
console.log(`Результат: ${price}`);