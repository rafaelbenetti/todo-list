(function () {
    'use strict';

    const promise = require('promise');
    const mongo = require('mongodb');
    const COLLECTION = 'todo';
    let todoService = {};

    todoService.find = function () {
        return new Promise((resolve, reject) => {
            mongo.DB.collection(COLLECTION)
                .find()
                .toArray()
                .then((result) => resolve(result),
                    reject);
        });
    };

    todoService.create = function (todo) {
        return new Promise((resolve, reject) => {
            mongo.DB.collection(COLLECTION)
                .insert(todo)
                .then(() => resolve(todo),
                    reject);
        });
    };

    todoService.update = function (todo) {
        return new Promise((resolve, reject) => {
            console.log(todo);
            mongo.DB.collection(COLLECTION)
                .updateOne({
                    _id: new mongo.ObjectID(todo._id)
                }, {
                    $set: {
                        description: todo.description,
                        order: todo.order,
                        completed: todo.completed
                    }
                })
                .then((result) => resolve(result),
                    (error) => reject(error));
        });
    };

    todoService.delete = function (id) {
        return new Promise((resolve, reject) => {
            mongo.DB.collection(COLLECTION)
                .deleteOne({
                    _id: new mongo.ObjectID(id)
                })
                .then(() => resolve(),
                    reject);
        })
    };

    module.exports = todoService;
})();