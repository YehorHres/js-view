// // let book = {
// //     title: "Кобзар",
// //     author: "Тарас Шевченко",
// //     year: "1840",
// //     price: 500,
// //     available: true,
// // }
// // console.log(book.title);
// //console.log(book[0]);
//
//
// let books = [
//     {
//         id: 1,
//         title: "Кобзар",
//         author: "Тарас Шевченко",
//         year: "1840",
//         price: 500,
//         available: true
//     },
//     {
//         id: 2,
//         title: "Тигролови",
//         author: "Іван Багряний",
//         year: "1840",
//         price: 550,
//         available: true
//     },
//     {
//         id: 3,
//         title: "Місто",
//         author: "Валер'ян Підмогильний",
//         year: "1927",
//         price: 450,
//         available: false
//     }
// ];
// // console.log(books[2]);
// // for (let book of books) {
// //     console.log(`[${book.id}]: ${book.title}, ${book.author}, ${book.year}, ${book.price}, ${book.available}, ${book.available}, ${book.price}`);
// // }
// // books.forEach(function (book){
// //     console.log(book.title);
// // })
//
// let availableCount = 0;
// let totalPrice = 0;
// for (let book of books) {
//     if (book.available === true) {
//         availableCount++;
//         totalPrice += book.price;
//     }
// }
// console.log(availableCount);
// console.log(totalPrice);
//
// books.push({
//     id: 4,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: "1882",
//     price: 500,
//     available: true
// });
//
// console.log(books.length);
// let idBooks = +prompt("Введіть ід книги: ");
// let foundBook = null;
// for (let book of books) {
//     if (book.id === idBooks) {
//         foundBook = book;
//         break;
//     }
// }
// if (foundBook !== null) {
//     let status = "Немає у наявності";
//     if (foundBook.available === true) {
//         status = "У наявності";
//     }
//     alert(`${foundBook.title}, ${foundBook.author}, ${foundBook.year}, ${foundBook.price} грн, ${status}`);
// } else {
//     alert("Книжки немає з таким ід");
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
///////////////////////ДДДДДДДДДДДДДДДДДДЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗ///////////////////////
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



let clubs = [
    {
        id: 1,
        name: "Танці",
        category: "Мистецтво",
        price: 550,
        members: 14,
        active: true
    },
    {
        id: 2,
        name: "Малювання",
        category: "Мистецтво",
        price: 600,
        members: 9,
        active: false
    },
    {
        id: 3,
        name: "Футбол",
        category: "Спорт",
        price: 400,
        members: 18,
        active: true
    },
    {
        id: 4,
        name: "Бокс",
        category: "Спорт",
        price: 450,
        members: 10,
        active: false
    },
    {
        id: 5,
        name: "Волейбол",
        category: "Спорт",
        price: 350,
        members: 12,
        active: true
    }
];


let menuChoice;
let idClub;
let foundClub;
let status;

do {
    menuChoice = +prompt("Каталог гуртків\n\n" + "1 - Показати всі гуртки\n" + "2 - Знайти гурток за ID\n" + "3 - Записати учасника\n" + "4 - Змінити статус набору\n" + "5 - Додати новий гурток\n" + "6 - Показати статистику\n" + "0 - Вихід");

    switch (menuChoice) {
        case 1:
            if (clubs.length === 0) {
                alert("Каталог порожній");
                break;
            }
            clubs.forEach(function (club) {
                status = "Набір закрито";
                if (club.active === true) {
                    status = "Набір відкрито";
                }
                alert(`[${club.id}]: ${club.name}, ${club.category}, ${club.price} грн, ${club.members} учснк, ${status}`);
            });
            break;

        case 2:
            idClub = +prompt("Введіть ід гуртка:");
            foundClub = null;
            for (let club of clubs) {
                if (club.id === idClub) {
                    foundClub = club;
                    break;
                }
            }
            if (foundClub === null) {
                alert("Гуртка з таким ід немає");
            } else {
                status = "Набір закрито";
                if (foundClub.active === true) {
                    status = "Набір відкрито";
                }
                alert(`[${foundClub.id}]: ${foundClub.name}, ${foundClub.category}, ${foundClub.price} грн, ${foundClub.members} учасників, ${status}`);
            }
            break;

        case 3:
            idClub = +prompt("Введіть  гуртка:");
            foundClub = null;
            for (let club of clubs) {
                if (club.id === idClub) {
                    foundClub = club;
                    break;
                }
            }
            if (foundClub === null) {
                alert("Гуртка з таким ід немає");
            } else if (foundClub.active === false) {
                alert("Набір закрито");
            } else if (confirm("Записати учасника?")) {
                foundClub.members++;
                alert("Додано");
            } else {
                alert("Не додано");
            }
            break;

        case 4:
            idClub = +prompt("Введіть ід гуртка:");
            foundClub = null;
            for (let club of clubs) {
                if (club.id === idClub) {
                    foundClub = club;
                    break;
                }
            }
            if (foundClub === null) {
                alert("Гуртка з таким ід немає");
            } else if (confirm("Змінити статус?")) {
                if (foundClub.active === true) {
                    foundClub.active = false;
                } else {
                    foundClub.active = true;
                }
                alert("змінено");
            }
            break;


        case 5:
            let newName = prompt("Назва");
            while (newName === "") {
                newName = prompt("поилка, введіть нов уназву");
            }
            let newCategory = prompt("Напрям");
            let newPrice = +prompt("Вартість");
            while (newPrice < 0 || Number.isNaN(newPrice)) {
                newPrice = +prompt("Не може бути від'ємною");
            }
            let newMembers = +prompt("Кількість учасників");
            while (newMembers < 0 || Number.isNaN(newMembers)) {
                newMembers = +prompt("Не може бути від'ємною");
            }
            let maxId = 0;
            for (let club of clubs) {
                if (club.id > maxId) {
                    maxId = club.id;
                }
            }
            clubs.push({
                id: maxId + 1,
                name: newName,
                category: newCategory,
                price: newPrice,
                members: newMembers,
                active: true
            });
            alert(`додано`);
            break;


        case 6:
            if (clubs.length === 0) {
                alert("Каталог порожній");
                break;
            }
            let open = 0;
            let members = 0;
            let price = 0;
            for (let club of clubs) {
                if (club.active === true) {
                    open++;
                }
                members += club.members;
                price += club.price;
            }
            alert(`Гуртків: ${clubs.length}, відкритих: ${open}, учасників: ${members}, середня ціна: ${price/clubs.length} грн`);
            break;
        case 0:
            break;
        default:
            alert("Нема таког опункту")
    }
} while (menuChoice !== 0);