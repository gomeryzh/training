"use strict";

const getUsersById = id =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("error while fetching");
    });

const userById = getUsersById(2).then(user => console.log(user));
const userName = getUsersById(2).then(user => console.log(user.name));

const updatedUserName = 'Ervin Mack';
const updateUserName = (id, newName) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(responce => {
    if (responce.ok) {
        return responce.json();
    }
    throw new Error('error while fetching');
}).then(user => {
    console.log(user.name);
    user.name = newName
    console.log(user.name);
});

updateUserName(2, updatedUserName);


const getAllUsers = () =>
    fetch("https://jsonplaceholder.typicode.com/users").then(Response => {
        if (Response.ok) {
            return Response.json();
        }
        throw new Error('fetching error');
    }).then(allUsers => allUsers);

const users = getAllUsers();
users.then(users => console.log(users));

const getAllUsersName = () => {
    users.then(users => users.map( user => console.log(user.name)));
}

const allUsersNames = getAllUsersName();
console.log(allUsersNames);

// const allUsersName = users.then(users => {
//     const usersName = users.map(user => user.name);
//     console.log(usersName);
//     return usersName;
// });

const newPost = {
    title: 'Mango',
    body: 'CRUD is awesome',
  };

const addPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'Post',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    }).then(responce => {
        if(responce.ok) {
            responce.json();
        }
        throw new Error('Error' + responce.statusText);
    }).then(data => console.log(data)).catch(error => console.log('ERROR' + error));
}

const addNewPost = addPost();