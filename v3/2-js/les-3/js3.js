// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('write a number');
// if (x !== 0) {
//     console.log('Вірно');
// }
//     else {
//     console.log('Невірно');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('введіть число від 0 до 59');
//
// if (time > 0 && time <= 14) {
//     console.log('перша чверть');
// } else if (time >= 15 && time <= 29) {
//     console.log('друга чверть');
// } else if (time >= 30 && time <= 44) {
//     console.log('третя чверть');
// } else if (time >= 45 && time <= 59) {
//     console.log('четверта чверть');
// } else {
//     console.log('спробуй ще');
//     }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('введіть число від 1 до 31');
//
// if (day >= 1 && day <= 10) {
//     console.log('перша декада');
// } else if (day >= 11 && day <= 20) {
//     console.log('друга декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('третя декада');
// } else {
//     console.log('спробуй ще');
//     }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('write a number from 1 till 7');
//  switch (day) {
//      case 1:
//          console.log('monday');
//          break;
//      case 2:
//          console.log('tuesday');
//          break;
//      case 3:
//          console.log('wednesday');
//          break;
//      case 4:
//          console.log('thursday');
//          break;
//      case 5:
//          console.log('friday');
//          break;
//      case 6:
//          console.log('saturday');
//          break;
//      case 7:
//          console.log('sunday');
//          break;
//      default:
//          console.log('wrong');
//  }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let first = +prompt('write a number');
// let second = +prompt('write a number again');
//
// if (first > second) {
//     console.log(first);
// } else if (first < second) {
//     console.log(second);
// } else if (first === second) {
//     console.log('the numbers are equal');
// } else {
//     console.log('try again');
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)


