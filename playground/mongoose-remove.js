const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result)
// });

//Todo.findOneAndRemove()
//todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5c3d2c19cd1aabb086eb2926'}).then((todo) => {
   console.log(todo);
});
Todo.findByIdAndRemove('5c3d2c19cd1aabb086eb2926').then((todo) => {
   console.log(todo);
});