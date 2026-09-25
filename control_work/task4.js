let count = +prompt("Кількість автомобілів")
let hours;
let kind;
let electr = 0;
let sum =0;
let price = 0;
let fullPrice = 0;
let obrobleno = 0;
let max = 0;
while(count < 1 || count > 7){
    count = +prompt("Кількість автомобілів")

}
for (let i = 1; i <= count; i++) {
    hours = +prompt(`Кількість годин стоянки(автомобіль ${i})`);
    if (hours === 0){
        break;
    }
    kind = +prompt("1 — звичайний;\n 2 — електромобіль.")
    if (kind !== 1 && kind !== 0) {
        alert("Помилка. Наступний автомобіль")
        continue;
    }
    switch (kind){
        case 1:
            price = 40;
            break;
        case 2:
            price = 30;
            electr++;
            break;
    }
    if (count > 5){
        fullPrice = 0.8*(price * count)
    }else{
        fullPrice = price * count
    }
    if (fullPrice > max){
        max = fullPrice;
    }
    obrobleno++;
    sum = sum + fullPrice;



}

console.log(`оброблених автомобілів ${obrobleno}`)
console.log(`кількість електромобілів ${electr}`)
console.log(`Сума ${sum}`)
console.log(`найбільшу оплату за один автомобіль ${max}`)
