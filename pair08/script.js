// function name(аргументи) {
//     код
// }


// function showMessage() {
//     alert("Hello World!");
//
// }
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();



// function showInfo() {
//     console.log("В гостях у Марійки");
//     console.log("Магазин працює з 8:00 до 23:00!");
// }
//
// showInfo()
//
//
// function showProducts(name, price, count) {
//     console.log("Марійка продає:", name)
//     console.log("Ціна: ", price * count, "грн")
// }
//
// showInfo()
// showProducts("Пральний порошок", 800, 3)


// function calculateTotal(price, count) {
//     return price * count;
// }
//
// let total = calculateTotal(800, 3);
// console.log(total);



// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     }
//     else{
//         return 0;
//     }
// }
//
// let discount1 = discount(1000);
// let discount2 = discount(8000);
// console.log(discount1);
// console.log(discount2);


// function getProductTotal(price, count) {
//     return price * count;
// }
//
// function getDiscount(total) {
//     if (total >= 10000) {
//         return 15;
//     } else if (total >= 5000) {
//         return 10;
//     }else if (total >= 2000) {
//         return 5;
//     }else{
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percent) {
//     return total * percent / 100
// }
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
// let productName = prompt('Enter product name');
// let productPrice = prompt('Enter price');
// let productCount = +prompt("Enter count");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар ${productName}`);
// console.log(`Ціна ${productPrice} грн`);
// console.log(`Кількість ${productCount} шт`);
// console.log(`Сума ${productTotal} %`);
// console.log(`Знижка ${productDiscountPercent} грн`);
// console.log(`Сума знижка ${productDiscountValue} грн`);



//--------------------------------,,,,,,,,,,,,,,........САМОСТІІІІІІІІІІІІІІІІІІІІІІІІІІІІІІІІІІЙНААААААААААААААААААААААААААААААААААА--------------------------------,,,,,,,,,,,,,,........

function calculateTickets(price, count) {
    return price * count;
}


function calculateTicketDiscount(total, percent) {
    return total * percent/ 100;
}
function getTicketDiscount(total) {
    if (total >= 1500) {
        return 15;
    } else if (total >= 1000) {
        return 10;
    } else if (total >= 500) {
        return 5;
    } else {
        return 0;
    }
}
function calculateTicketFinalPrice(total, discount) {
    return total - discount;
}

let ticketPrice = +prompt("Ціна квитка");
let ticketCount = +prompt("Кількість квитків");

let ticketTotal = calculateTickets(ticketPrice, ticketCount);

let ticketDiscountPercent = getTicketDiscount(ticketTotal);

let ticketDiscountValue = calculateTicketDiscount(ticketTotal, ticketDiscountPercent);

let ticketFinalPrice = calculateTicketFinalPrice(ticketTotal, ticketDiscountValue);

console.log(`Ціна квитка: ${ticketPrice} грн`);
console.log(`Кількість квитків: ${ticketCount} шт`);
console.log(`Загальна вартість: ${ticketTotal} грн`);
console.log(`Знижка: ${ticketDiscountPercent} %`);
console.log(`Сума знижки: ${ticketDiscountValue} грн`);
console.log(`До сплати: ${ticketFinalPrice} грн`);
