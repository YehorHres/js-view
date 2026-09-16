// let num = 1;
// while (num <=5) {
//     console.log(num);
//     num++;
// }

// let USnum = +prompt("Enter a number");
// while(USnum < 1 || USnum > 10){
//     USnum = +prompt("Error. Enter new number");
// }
// console.log(USnum);

//Number()
// String()
// isNaN()
// console.log(Number("7"))
// console.log(Number("hello"))

// let age = +prompt('Enter your age');
// while(Number.isNaN(age) || age <= 0 || age >= 100){
//     age = +prompt('Enter your age');
// }
// console.log(age);'

// const correctPin = 1234;
// let pin = +prompt('Enter a valid pin');
// let attempts = 1;
// while (attempts < 3 && pin !== correctPin) {
//     pin = +prompt('Enter a valid pin');
//     attempts++;
// }
// if (pin === correctPin) {
//     console.log('PIN is correct');
// }else{
//     console.log('block');
// }

// let attempts = 1, password = 1234;
// while(attempts <= 3){
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword){
//         console.log("Allowed");
//         break;
//     }
//     console.log("Passwords don't match!");
//     attempts++;
// }


//______________________________________//
// let attempts = 1, password = 1234;
// while(attempts <= 3){
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword){
//         console.log("Allowed");
//         break;
//     }
//     console.log(`Passwords don't match! Залишилось спроб: ${3 - attempts}`);
//     attempts++;
// }

// let menuChoice;
// do {
//     menuChoice = +prompt("Оберіть дію:\n" +
//         "1 - Профіль\n" + "2 - налаштування\n" + "0 - вихід");
//     if(menuChoice === 1) {
//         alert("Відкриваємо профіль")
//     }else if (menuChoice === 2) {
//         alert("Відкриваємо налаштування")
//     }else if (menuChoice === 0) {
//         alert("Вихід")
//     }else{
//         alert("невідомий вибір")
//     }
// } while (menuChoice !== 0);

//______________________________________//
// let menuChoice;
// do {
//     menuChoice = +prompt("Оберіть дію:\n" +
//         "1 - Профіль\n" + "2 - Налаштування\n" + "3 - Новини\n" + "0 - Вихід");
//     switch (menuChoice) {
//         case 1:
//             alert("Відкриваємо профіль");
//             break;
//         case 2:
//             alert("Відкриваємо налаштування");
//             break;
//         case 3:
//             alert("Відкриваємо новини");
//             break;
//         case 0:
//             alert("Вихід");
//             break;
//         default:
//             alert("невідомий вибір");
//     }
// } while (menuChoice !== 0);


// let count = 0;
// let sum = 0;
//
// while (count < 5) {
//     let currentGrade = +prompt(`Введіть оцінку № ${count + 1}`);
//     if (currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)) {
//         alert("Uncorrect grade");
//         continue;
//     }
//     sum += currentGrade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5);


// let questionsNumber = 1;
// let score = 0;
// while (questionsNumber <= 5) {
//     let questions = "", answers = "";
//     switch (questionsNumber) {
//         case 1:
//             questions = "Як створювати змінну?"
//             answers = 'let';
//             break;
//         case 2:
//             questions = "Оператор строгої рівності"
//             answers = '===';
//             break;
//         case 3:
//             questions = "Оператор and";
//             answers = '&&';
//             break;
//         case 4:
//             questions = "Як завершити цикл?";
//             answers = 'break';
//             break;
//         case 5:
//             questions = "Як записати інкремент";
//             answers = '++';
//             break;
//     }
//     let answer = prompt(`Запитання № ${questionsNumber} із 5\n ${questions}`);
//     if (answer === "") {
//         console.log("Відповідь не може бути пустою");
//         continue;
//     }
//     if (answer === answers) {
//         alert("правильно")
//         score++;
//     }else{
//         alert("неправильно")
//     }
//     questionsNumber++;
// }
// if(score === 5){
//     alert("Відмінно")
// }else if(score === 4 || score === 3){
//     alert("норм")
// }else{
//     alert("невдаха")
// }


//------------------------------------HOOOOMEWORK----------------------------------------//
let age = +prompt("Введіть свій вік:");

let pin = 4321;
let attempts = 1;
let menuChoice;

while (age < 12 || age > 90 || Number.isNaN(age)) {
    age = +prompt("Введіть коректний вік");
}

while (attempts <= 3) {
    let userPin = +prompt(`Введіть pin(спроба ${attempts} із 3):`);
    if (userPin === pin) {
        do {
            menuChoice = +prompt("Оберіть дію:\n" +
                "1 - Особистий кабінет\n" + "2- Повідомлення\n" + "3 -Налаштування\n" + "0-Вихід");

            switch (menuChoice) {
                case 1:
                    alert("Відкриваємо особистий кабінет");
                    break;
                case 2:
                    alert("Відкриваємо повідомлення");
                    break;
                case 3:
                    alert("Відкриваємо налаштування");
                    break;
                case 0:
                    alert("Вихід");
                    break;
                default:
                    alert("Такого пункту немає");
            }
        } while (menuChoice !== 0);

        break;
    } else {
        alert("Невірний pin");
        attempts++;
    }

}
