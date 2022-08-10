// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());

// 3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToarray(s) {
//     return s.split(' ');
// }
//
// let arr = stringToarray(str);
// console.log(arr);

// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let mas = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let mapMas = mas.map(value => value.toString());
// console.log(mapMas);
//
// function string(mas) {
//     return mas.map(value => value.toString());
// }
//
// console.log(string(mas));

// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//
// function sortNums(element1, element2) {
//     if (element2 === 'ascending') {
//         return element1.sort((a, b) => {
//             return a - b;
//         });
//     }
//     if (element2 === 'descending') {
//         return element1.sort((a, b) => {
//             return b - a;
//         })
//     }
//
//     else {
//         console.log('wrong');
//     }
// }
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
// console.log(sortNums(nums, 'sdfs'));

// 8 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// 8.1 -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// });
//
// console.log(sort);

// 8.2 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// 9 - описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'joker', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'red'},
    {cardSuit: 'spade', value: 'ace', color: 'red'}
];
// - знайти піковий туз
console.log(cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace'));
// - всі шістки
console.log(cards.filter(value => value.value === '6'));
// - всі червоні карти
console.log(cards.filter(value => value.color === 'red'));
// - всі буби
console.log(cards.filter(value => value.cardSuit === 'diamond'))
// - всі трефи від 9 та більше





// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


