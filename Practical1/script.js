


let KindOfTicket = +prompt("1 — кіно;\n 2 — театр;\n 3 — концерт");
while(KindOfTicket !== 1 &&  KindOfTicket !== 2 && KindOfTicket !== 3) {
    KindOfTicket = +prompt("Введіть дійсне\n 1 — кіно;\n 2 — театр;\n 3 — концерт")
}
let UsualPrice;
switch (KindOfTicket) {
    case 1:
        UsualPrice = 150;
        break;
    case 2:
        UsualPrice = 220;
        break;
    case 3:
        UsualPrice = 350;
        break;
}

let day = +prompt("1 - Будній\n 2 - Вихідний");
while(day !== 1 &&  day !== 2) {
    day = +prompt("1 - Будній\n 2 - Вихідний")
}
if (day === 2) {
    UsualPrice = UsualPrice * 1.15;
}

let Count = +prompt("К-ть квитків(від 1 до 6):");
while( Count < 1 ||  Count > 6 || Number.isNaN(Count)) {
    Count = +prompt("Помилка. Ксть квитків(від 1 до 6):")
}

let oformlene = 0;
let free = 0;
let wdiscount = 0;
let fullPrice = 0;
let total = 0;

for(let tnum = 1; tnum <= Count; tnum++) {
    let age = +prompt(`Квиток №${tnum}.\n Введіть вік(-1 - завершити оформлення):`);

    while ((age < 0 || age > 100 || Number.isNaN(age)) && age !== -1) {
        age = +prompt("Неправильний вік. Введдфіть ще (-1, щоб завершити):");
    }

    if (age === -1) {
        alert("Оформлення завершено");
        break;
    }

    let price = UsualPrice;

    if (age <= 5) {
        free++;
        oformlene++;
        continue;
    } else if (age <= 12) {
        price = UsualPrice * 0.5;
        wdiscount++;
    } else if (age <= 17) {
        price = UsualPrice * 0.8;
        wdiscount++;
    } else if (age <= 59) {
        price = UsualPrice;
        fullPrice++;

        if (age >= 18 && age <= 25) {
            let hasStudentCard = prompt("Є студентський квиток?");
            if (hasStudentCard === "так") {
                price = price * 0.9;
                fullPrice--;
                wdiscount++;
            }
        }

    } else {
        price = UsualPrice * 0.75;
        wdiscount++;
    }


    total += price;
    oformlene++;
}

if (total > 1000) {
    total = total * 0.95;
    console.log("знижка 5%");
}

console.log(`Оформлено: ${oformlene}`);
console.log(`Безкоштовні: ${free}`);
console.log(`Зі знижккою: ${wdiscount}`);
console.log(`За повною ціною: ${fullPrice}`);
console.log(`total: ${total}грн`);