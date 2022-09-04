// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.


let url = new URL(location.href);

let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(data => {
        let div = document.createElement('div');
        div.classList.add('mainDiv')
        document.body.appendChild(div);

        //les-8 dz 7.2
        function rec(item) {
            for (const element in item) {
                if (typeof item[element] !== 'object') {
                    let p = document.createElement('p');
                    p.append(`${element} - ${item[element]}`);
                    div.appendChild(p);
                }else {
                    rec(item[element]);
                }
            }
        }

        rec(data);

        let mainBtnDiv = document.createElement('div');
        mainBtnDiv.classList.add('mainBtnDiv');
        document.body.appendChild(mainBtnDiv);

        let btn = document.createElement('button');
        btn.innerText = ' post of current user';
        btn.classList.add('postOf');

        mainBtnDiv.appendChild(btn)

        btn.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(res => res.json())
                .then(posts => {
                    for (const post of posts) {
                        let divA = document.createElement('div');
                        divA.innerText = `${post.id}, ${post.title} - `
                        divA.classList.add('postDiv')
                        mainBtnDiv.appendChild(divA);
                        let postDetailsBtn = document.createElement('a');
                        postDetailsBtn.innerText = 'post details';
                        postDetailsBtn.classList.add('postDetailsBtn');
                        postDetailsBtn.href = `../post-details/post-details.html?id=${post.id}`
                        divA.appendChild(postDetailsBtn);
                    }
                    
                })
            // mainBtnDiv.classList.toggle('hidden')





        };

        document.body.appendChild(btn);
        
    });
