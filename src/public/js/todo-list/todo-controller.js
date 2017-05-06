(function () {
    'use string';

    angular
        .module('todoList')
        .controller('TodoController', ['todoService', TodoController]);

    function TodoController(todoService) {
        let controller = this;
        controller.todos = [];

        controller.find = () => {
            todoService.find()
                .then(function (todos) {
                    controller.todos = todos;
                });
        }

        controller.find();
    };
})();