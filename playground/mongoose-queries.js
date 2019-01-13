const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5c3baa1defccc381372857f7';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by id', todo._doc);
// }).catch((e) => console.log(e));

var id = '5c3ac87c085d66ed2e208254';

User.findById(id).then((user) => {
    if(!user) console.log('User not found')
    console.log('User by id', user._doc)
}).catch((e) => console.log(e));
