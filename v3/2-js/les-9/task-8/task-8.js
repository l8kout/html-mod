// 8 -- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.forms.f1;
form.onsubmit = function (e) {
    e.preventDefault();
    let age = this.age.value;
    console.log(age);
    if (age < 18) {
        document.write('вік меньший 18');
    }
};