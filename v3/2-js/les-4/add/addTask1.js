// 1 --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let massNumber = [1, 2, 3, 4, 5];
// let massString = ['apple', 'dog', 'kid', '!', '100'];
// let mass = [1, '2', true, false, 0];
//
// console.log(mass);
// console.log(massString);
// console.log(massNumber);

// 2 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let empty = [];
//
// empty[0] = 1;
// empty[1] = 0;
// empty[2] = 1;
// empty[3] = 2;
// empty[4] = 1;
//
// console.log(empty);

// 3 -- є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

// let data = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < data.length) {
//     console.log(data[i]);
//     i++;
// }

// 2. перебрати його циклом for

// let data = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (i = 0; i < data.length; i++) {
//     console.log(data[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let data = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < data.length) {
//     if (i%2 !== 0) {
//         console.log(data[i]);
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

let data = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (const datum of data) {
    
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)





// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор