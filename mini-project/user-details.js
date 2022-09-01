let url = new URL(location.href);
let date = JSON.parse(url.searchParams.get('date'));


let userDetailsContainer = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];
let postsDetailsButton = document.getElementsByClassName('postsDetailsButton')[0];


function userBlock(value, box) {
    for (const key in value) {
        if (typeof value[key] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${key}:${value[key]}`;
            box.appendChild(p);
        } else {

            userBlock(value[key], box);
        }
    }
}
userBlock(date, userDetailsContainer);



postsDetailsButton.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${date.id}/posts`)
        .then(value => value.json())
        .then(value =>{
            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText =`Post ID  :  ${postItem.id}       Title : ${postItem.title} ` ;

                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'post details';
                postDetailsButton.classList.add('btn')

                postDetailsButton.onclick = function () {
                    location.href = `post-details.html?data=${JSON.stringify(postItem)}`;
                };


                postContainer.appendChild(postDetailsButton);
                postsContainer.append(postContainer);

            }
        })
}

userDetailsContainer.appendChild(postsDetailsButton);
