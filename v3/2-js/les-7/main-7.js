// // 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//
// let u1 = new User(2, 'Saci', 'Lotoc', 'SAwe@gmail.com', '+123123');
// let u2 = new User(55, 'Lok', 'Got', 'dfwe@gmail.com', '+123123');
// let u3 = new User(444, 'Fi', 'Sa', 'fisa@gmail.com', '+123123');
// let u4 = new User(9, 'Gor', 'Ko', 'kog@gmail.com', '+123123');
// let u5 = new User(44, 'lil', 'Pain', 'Lile@gmail.com', '+123123');
// let u6 = new User(71, 'Pop', 'Dip', 'Popdi@gmail.com', '+123123');
// let u7 = new User(82, 'Vova', 'Lik', 'Voval@gmail.com', '+123123');
// let u8 = new User(999, 'Qrt', 'Swz', 'Qwer@gmail.com', '+123123');
// let u9 = new User(101, 'Hok', 'Hi', 'hh@gmail.com', '+123123');
// let u10 = new User(11, 'Nat', 'Boll', 'Nabo@gmail.com', '+123123');
//
// let mas = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];
//
// // 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let two = mas.filter(value => value.id % 2 === 0);
// console.log(two);
//
// // 3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUser = mas.sort((a, b) => a.id - b.id);
// console.log(sortUser);

// // 4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.order = order;
//     }
// }
//
// // let nClient = new Client(1, 'A', 'B', 'mail', '123', {productOne:'apple', productTwo: 'milk', productThree: 'potato'});
// // console.log(nClient);
// //
// // // 5 - створити пустий масив, наповнити його 10 об'єктами Client
// //
// let client1 = new Client(25, 'Tot', 'Han', 'sdf@gmail.com', '+32344343', ['book', 'apple', 'phone']);
// let client2 = new Client(3, 'Vot', 'Foo', 'Ffdf@gmail.com', '+32344343', ['tree', 'car', 'home']);
// let client3 = new Client(321, 'Sisi', 'Fun', 'Ffffun@gmail.com', '+32322213', ['seeds']);
// let client4 = new Client(55, 'Chi', 'Yo', 'chi@gmail.com', '+32322213', ['apple', 'apple']);
// let client5 = new Client(12, 'Bob', 'Dilan', 'bob@gmail.com', '+32322213', ['book', 'book', 'book', 'book', 'book']);
// let client6 = new Client(5, 'Tot', 'Han', 'sdf@gmail.com', '+32344343', ['book', 'apple', 'phone']);
// let client7 = new Client(9, 'Vot', 'Foo', 'Ffdf@gmail.com', '+32344343', ['tree', 'car']);
// let client8 = new Client(31, 'Sisi', 'Fun', 'Ffffun@gmail.com', '+32322213', ['seeds', 'water', 'tree', 'apple']);
// let client9 = new Client(15, 'Chi', 'Yo', 'chi@gmail.com', '+32322213', ['apple', 'apple', 'water', 'apple', 'water', 'apple', 'water']);
// let client10 = new Client(112, 'Bob', 'Dilan', 'bob@gmail.com', '+32322213', ['book', 'book', 'book']);
//
//
// let client = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
//
// console.log(client);
//
// // 6 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortClient = client.sort((a, b) => a.order.length - b.order.length);
// console.log(sortClient);

// // 7 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, manufacturer, year, maxSpeed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
// // 7.1 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
// // 7.2 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         for (const argumentsKey in this) {
//             if (typeof this[argumentsKey] !== 'function') {
//                 console.log(`${argumentsKey} --- ${this[argumentsKey]}`)
//             }
//         }
//     };
//
// // 7.3 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(this.maxSpeed);
//     };
//
// // 7.4 -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         this.year  = newValue;
//         console.log('new year - ' + this.year);
//     };
//
// // 7.5 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let car = new Car('peugeot', 'china', '2010', 100, 2.0);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2000);
// car.addDriver({name: 'dima', age: 23});

// - (Те саме, тільки через клас)
// 8 -- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         for (const argumentsKey in this) {
//             if (typeof this[argumentsKey] !== 'function') {
//                 console.log(`${argumentsKey} --- ${this[argumentsKey]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car('peugeot', 'china', '2222', 100, 2.0);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(77);
// car.changeYear(2000);
//
// let newDriver = {
//     name: 'Anna',
//     age: 77,
// };
//
// car.addDriver(newDriver);
// console.log(car);
//
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
//
// let cinderella1 = new Cinderella('Nina', 11, 7);
// let cinderella2 = new Cinderella('Nina', 12, 71);
// let cinderella3 = new Cinderella('Nina', 13, 74);
// let cinderella4 = new Cinderella('Nina', 23, 12);
// let cinderella5 = new Cinderella('Nina', 24, 16);
// let cinderella6 = new Cinderella('Nina', 3, 21);
// let cinderella7 = new Cinderella('Nina', 122, 31);
// let cinderella8 = new Cinderella('Nina', 9, 51);
// let cinderella9 = new Cinderella('Nina', 5, 22);
// let cinderella10 = new Cinderella('Nina', 2, 23);
//
// let cinderella = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
//
// console.log(cinderella);
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince extends Cinderella {
//     constructor(name, age, findFootSize) {
//         super(name, age);
//         this.findFootSize = findFootSize;
//     }
// }
//
// let prince = new Prince('Dima', 22, 7);
//
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// let find = (arrey, prince) => {
//     for (const item of arrey) {
//         if (prince.findFootSize === item.footSize) {
//             return `My cinderella is ${item.name}`
//         }
//     }
// };
//
// console.log(find(cinderella, prince));
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let findCinderella = cinderella.find(value => prince.findFootSize === value.footSize);
// console.log(findCinderella);