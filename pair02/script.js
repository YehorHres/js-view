//> < >= <= == === !== !=

// if (умова){
//     код
// }

// let temp = Number(prompt("What is your name?"));
// let result;
// if (temp < 0) {
//     result == "холодно"
// }
// else if (temp > 0 && temp < 25) {
//     result = "нормально"
// }
// else if (temp > 25) {
//     result = "hot"
// }
// console.log(result);



//Завдання 1&&&&&&&&&&
// let n = Number(prompt("chislo"));
//
// if (n % 2 === 0) {
//     console.log(`парне`);
//
// } else {
//     console.log('непарне');
// }



// const login = "admin";
// const password = "12345";
//
// let userlog = prompt("Login")
// let userpassword = prompt("Password")
//
// if (userlog === login && userpassword === password) {
//     alert("дозвіл дозволено");
// }
// else{
//     alert("вхід заборонено")
// }


// post 100
// courier 200
// pickup 0

// let deliverytype = prompt('What is your delivery type?');
// let cost = 0
//
// switch(deliverytype) {
//     case 'post':
//         cost = 100;
//         break;
//     case 'courier':
//         cost = 200;
//         break;
//     case 'pickup':
//         cost = 0;
//         break;
//     default:
//      cost = "na";
// }
// alert(cost);

let day = prompt("номер дня");
let answ;
switch(day){
    case "1":
        answ="понеділок";
        break;
    case "2":
        answ="ВІВТОРОК";
        break;
    case "3":
        answ="середа";
        break;
    case "4":
        answ="четвер";
        break;
    case "5":
        answ="п'ятниця'";
        break;
    case "6":
        answ="субота";
        break;
    case "7":
        answ="неділя";
        break;
    default:
        answ = "неправильний номер дня"
}
alert(answ)