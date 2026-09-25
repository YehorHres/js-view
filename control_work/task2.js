let count = +prompt("К-ть учнів")
let grade;
let sum = 0;
let high = 0;
let down = 0;
let max = 0;
for(let i =1; i<=count; i++) {
    grade = +prompt("Оцінка")
    sum += grade;
    if (grade >= 7) {
        high = high+1;
    }else if (grade < 7) {
        down++;
    }
    if (grade > max) {
        max = grade;
    }

}
console.log(`Сума: ${sum}`)
console.log(`Середня: ${sum/count}`)
console.log(`Оцінок 7 і вище:: ${high}`)
console.log(`Оцінок нижче 7: ${down}`)
console.log(`Найбільша оцінка: ${max}`)
