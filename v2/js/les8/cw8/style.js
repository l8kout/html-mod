//    Взяти файл template_2.html та працювати в ньому
//    1) Напишіть код, який :
//    a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let itColor = document.getElementById('main_header')
// itColor.innerText = 'Dec-2021';

//    b) робить шириниу елементу ul 400px

// let ul = document.getElementsByTagName('ul');
// console.log(ul);
// ul[0].style.width = '400px';
// ul[0].style.backgroundColor = 'grey';

//    c) робить шириниу всіх елементів з класом linkList шириною 50%

// let widthLink = document.getElementsByClassName('linkList');
// console.log(widthLink);
// for (const widthLinkElement of widthLink) {
//     widthLinkElement.style.width = '50%';
//     widthLinkElement.style.border = '1px solid blue';
// }

//    d) отримує текст який зберігається в елементі з класом listElement2

// let textLi = document.getElementsByClassName('listElement2');
// console.log(textLi);

//    e) отримує всі елементи li та змінює ім колір фону на сірий

// let li = document.getElementsByClassName('linkList')
// console.log(li);
// for (const liElement of li) {
//     liElement.style.backgroundColor = 'grey';
//     liElement.style.width = '50%'
//     liElement.style.marginTop = '2px';
// }

//    f) отримує всі елементи 'a' та додає їм клас anchor

// let aAa = document.getElementsByTagName('a');
// for (const aAaElement of aAa) {
//     aAaElement.classList.add('anchor')
// }
// console.log(aAa);

//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elA = document.getElementsByTagName('a');
// for (const elAElement of elA) {
//     if (elAElement.innerText === 'link3') {
//         elAElement.style.fontSize = '40px'
//     }
// }
//
// console.log(elA);

//    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let fun = document.getElementsByTagName('a');
// for (const fun1 of fun){
//     console.log(fun);
//     let addTt = fun1.innerText;
//     fun1.classList.add('element_${addTt}') // шось тут не робе
// }
//
// console.log(fun);

//    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let bob = document.getElementsByClassName('sub-header');
// for (const bobElement of bob) {
//     bobElement.style.color = prompt('Color?')
// }
// console.log(bob);

//    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let barbara = document.getElementsByClassName('sub-header');
// for (const barbaraElement of barbara) {
//     if (barbaraElement.innerText === 'content 2 segment') {
//         barbaraElement.style.color = prompt('do you have some colors?');
//     }
// }
//
// console.log(barbara);

//    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let alex = document.getElementsByClassName('content_1');
// console.log(alex);
// for (const alex1 of alex) {
//     alex1.innerText = prompt('???');
// }
//
// console.log(alex);

//    l) отримати елементи p та змінити їм padding на 20px

// let pin = document.getElementsByTagName('p');
// for (const pinElement of pin) {
//     pinElement.style.padding = '20px'
// }
//
// console.log(pin);

//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let taxi = document.getElementsByClassName('text2');
// console.log(taxi);
//
// for (const taxiElement of taxi) {
//     taxiElement.innerText = 'Dec-2021. Пример sep-2021';
// }