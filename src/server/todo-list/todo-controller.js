(function () {
    'use strict';

    const todoService = require('./todo-service');

    let todoController = {};

    todoController.find = search => todoService.find(search);
    todoController.findAll = () => todoService.findAll();
    todoController.create = todo => todoService.create(todo);
    todoController.update = todo => todoService.update(todo);
    todoController.delete = id => todoService.delete(id);

    module.exports = todoController;
})(); 
