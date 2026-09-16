// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }
// for (let i = 10; i >= 1; i -= 2) {
//     console.log(i)
// }

// let sum = 0;
// for (let i = 0; i < 30; i++) {
//     sum += i;
//     console.log(sum);
// }


//_________________________//
// let sum = 0;
// for(let i = 0; i <= 50; i+=2) {
//     sum += i;
// }
// console.log(sum);

//___________________________//
// let n = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         n++
//     }
// }
// console.log(n)

//___________________________//
// for (let i = 1; i<=100; i++){
//     if(i>20 && i % 4 ===0 && i % 6 === 0){
//         console.log(i)
//         break
//     }
// }

//___________________________//
// for (let i =1; i<=30; i++){
//     if (i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }

//___________________________//
// let  studentCount = +prompt('Enter your student count');
// if (studentCount > 0) {
//     let sum = 0, highlLevel = 0, others = 0;
//     for (let i = 1; i <= studentCount; i++) {
//         let grade = +prompt('Enter your grade');
//         if (!(grade <= 12 && grade >= 1 )) {
//             alert("Error")
//             i--;
//             continue;
//         }
//         if (grade >= 7){
//             highlLevel++;
//         }
//         else {
//             others++;
//         }
//         sum += grade;
//     }
//     console.log(sum)
//     console.log(sum / studentCount)
//     console.log(highlLevel);
//     console.log(others);
// }




//---______ДДДДДДДДЗЗЗЗЗЗЗ______---//

let count = +prompt('Введіть кількість учасників');

if (count > 0) {
    let sum = 0;
    let high = 0;
    let mid = 0;
    let low = 0;
    let max = -1;
    let min = 101;
    let first = -123;

    for (let i = 1; i <= count; i++) {
        let res = +prompt('Введіть результат');
        if (!(res >= 0 && res <= 100)) {
            alert("помилка");
            i--;
            continue;
        }
        if (res >= 90) {
            high++;
        }else if (res >= 60) {
            mid++;
        }else {
            low++;
        }
        if (res > max) {
            max = res;
        }if (res < min) {
            min = res;
        }if (res === 100 && first === -123) {
            first = i;
        }

        sum += res;
    }

    console.log(sum / count);
    console.log(high);
    console.log(mid);
    console.log(low);
    console.log(max);
    console.log(min);
    console.log(first);
}





















