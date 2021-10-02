import React from "react";

type UsersType = {
    [key: string] : { id: number, name: string}
};
export const users: UsersType = {
    '101': {id: 101, name: 'Kate'},
    '121': {id: 121, name: 'Ann'},
    '454131': {id: 454131, name: 'Peter'},
    '41': {id: 41, name: 'Andy'},
    '15': {id: 15, name: 'Raven'},
};

console.log(users['101']) // searching user through its id - which is property of an object (associcative array)

let user = {id: 100500, name: 'Wendy'};
users[user.id] = user // adding new user to associative array
delete users[user.id] // deleting user
users[user.id].name = 'Andy' // update or change user

export const usersArray = [
    {id: 101, name: 'Kate'},
    {id: 121, name: 'Ann'},
    {id: 454131, name: 'Peter'},
    {id: 41, name: 'Andy'},
    {id: 15, name: 'Raven'},
]
// console.log(users["101"].name)

//usersArray.find(u=> u.id === 1) // searching user
//let usersCopy = [...usersArray.filter(), user] adding new user and before adding filtering for duplicate
// let usersArray = usersArray.filter(u => u.id !== user.id)