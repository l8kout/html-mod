// // Все робити за допомоги js.
// // - створити блок,
//
// let div = document.createElement('div');
// console.log(div)
//
// //     - додати йому класи wrap, collapse, alpha, beta
//
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// div.style.backgroundColor = 'grey';
// div.style.color = 'brown';
// div.style.fontSize = '22px';
//
// // - додати цей блок в body.
//
// document.body.appendChild(div);
// console.log(document.body.children);
//
// // - клонувати його повністю, та додати клон в body.
//
// document.body.appendChild(div.cloneNode(true));


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let mas = ['Main','Products','About us','Contacts'];
//
// let menu = document.getElementsByClassName('menu')[0];
// for (const element of mas) {
//     let li = document.createElement('li');
//     li.innerText = element;
//     menu.appendChild(li);
// }
//
// console.log(menu);

//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const curs of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${curs.title} ${curs.monthDuration}`
    document.body.appendChild(div);
}

console.log(document.body.children);


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
//
