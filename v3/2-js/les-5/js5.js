// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangleS(a, b) {
//     return a * b;
// }
// console.log(rectangleS(4, 4));

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleS(b) {
//     return 3.14 * (b * b);
// }
// console.log(circleS(4));

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderS(h, r) {
//     return 2 * 3.14 * r * h;
// }
// console.log(cylinderS(2, 22));

// 4 - створити функцію яка приймає масив та виводить кожен його елемент


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function arrayPrinter(array) {
//     for (const arrayElement of array) {
//         console.log(array);
//     }
// }
//
// arrayPrinter(users);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraf('some text');

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function writeText(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// writeText('some text');

// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(a, b) {
//     document.write(`<ul>`);
//     let i = 1;
//     while (i <= b) {
//         document.write(`<li>${a}</li>`);
//         i++;
//     }
//     document.write(`</ul>`)
// }
//
// list('Hello', 5);

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list(eleements) {
//     for (const eleement of eleements) {
//         console.log(eleement);
//     }
// }
//
// list([1, true, NaN, '!', 3]);

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'Vova', age: 15},
//     {id: 2, name: 'Iva', age: 22},
//     {id: 3, name: 'Asq', age: 31}];
//
//
// function usersInfo(elements) {
//     for (const element of elements) {
//         document.write(`<div>${element.id} - ${element.name} - ${element.age} </div>`);
//     }
// }
//
// usersInfo(users);

// 10 - створити функцію яка повертає найменьше число з масиву

// let mass = [1, -2, 4, 0, -1, 22];
// function massMin(arr) {
//     let min = arr[0];
//     for (const element of arr) {
//         if(element < min){
//             min = element;
//         }
//     }
//     return min;
// }
// console.log(massMin(mass));


// 11 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function calc() {
//     let res = 0;
//     for (const argument of arguments) {
//         res = res + argument;
//     }
//     return res;
// }
//
// let mas = calc(-1, 10, 1, 10);
// console.log(mas);