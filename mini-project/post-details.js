let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));


let postContainer = document.getElementsByClassName('post')[0];
// postContainer.innerText = JSON.stringify(post);


function postblock(value, box) {
    for (const key in value) {
        if (typeof value[key] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${key}   ${value[key]}`;
            box.appendChild(p);
        } else {

            postblock(value[key], box);
        }
    }
}

postblock(post, postContainer);



let commentsContainer = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const commentItem of value) {
            let commentContainer = document.createElement('li');
            commentContainer.innerText = commentItem.body;

            commentsContainer.appendChild(commentContainer);
        }
    });