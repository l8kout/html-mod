//
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let mas = [1, 0, 44, true, NaN, 'hello', 'mam', '10', '!!!', -99];
// i = 0;
// while (i < mas.length) {
//     console.log(mas[i]);
//     i++;
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

//  let book1 = {
//      title: 'книга перша' ,
//      pageCount: 33,
//      genre: 'роман'
//  }
// console.log(book1);
//
// let book2 = {
//     title: 'книга друга',
//     pageCount: 55,
//     genre: 'дитяча книга'
// }
// console.log(book2);
//
// let book3 = {
//     title: 'книга третя',
//     pageCount: 4,
//     genre: 'книга для дорослих'
// }
// console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

// let book4 = {
//     title: 'first book',
//     pageCount: 44,
//     genre: 'comics',
//     authors: [
//         {name: 'Жан Жене'},
//         {age: 15}
//     ]
// }
// console.log(book4);
//
// let book5 = {
//     title: 'second book',
//     pageCount: 14,
//     genre: 'comics',
//     authors: [
//         {name: 'Пасе Пелип'},
//         {age: 35}
//     ]
// }
// console.log(book5);
//
// let book6 = {
//     title: 'third book',
//     pageCount: 94,
//     genre: 'comics',
//     authors: [
//         {name: 'Тре Олена'},
//         {age: 71}
//     ]
// }
// console.log(book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let masa = [
    {name: 'Anton', username: 'Atom', password: 111},
    {name: 'Dmutro', username: 'DMX', password: 222},
    {name: 'Oleg', username: 'Leg', password: 333},
    {name: 'Antonina', username: 'Tona', password: 444},
    {name: 'Dima', username: 'Mina', password: 555},
    {name: 'Olia', username: 'Alien', password: 666},
    {name: 'Lesia', username: 'Sia', password: 777},
    {name: 'Yura', username: 'RA', password: 888},
    {name: 'Ostap', username: 'Tapas', password: 999},
    {name: 'Viktor', username: 'Tut', password: 100}
]

r = 0;
while (r < masa.length) {
    console.log(masa[r].password);
    r++;
}


