
let usersContainer = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce=>responce.json())
    .then(users => users.forEach(user=>{

        let userContainer = document.createElement('div');
        userContainer.classList.add('user');
        userContainer.innerText = `${user.id}   ${user.name}`;

        let userData = document.createElement('button');
        userData.innerText = 'User info' ;
        userData.classList.add('btn');


        userData.onclick = function () {
            location.href = `user-details.html?date=${JSON.stringify(user)}`
        };

        userContainer.appendChild(userData);
        usersContainer.appendChild(userContainer);


    }));
