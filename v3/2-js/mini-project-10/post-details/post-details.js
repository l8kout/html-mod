// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
        let div = document.createElement('div');
        div.classList.add('post')
        document.body.appendChild(div);

        for (const dataEl in data) {
            let div2 = document.createElement('div');
            div2.innerText = `${dataEl} - ${data[dataEl]}`;
            div.appendChild(div2);
        }
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(resu => resu.json())
    .then(dat => {
        let div = document.createElement('div');
        div.classList.add('comments');
        document.body.appendChild(div);
        for (const dats in dat) {
            let div2 = document.createElement('div');
            div2.classList.add('box')
            div2.innerText = `${dat[dats].body}`
            div.appendChild(div2);
        }
    })





