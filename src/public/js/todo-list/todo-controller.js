(function () {
    'use string';

    angular
        .module('todoList')
        .controller('TodoController', ['todoService', TodoController]);

    function TodoController(todoService) {
        let controller = this;
        controller.todos = [];       

        controller.find = (search) => {  
            todoService.find(search)
                .then(todos => controller.todos = todos);
        }

        controller.findAll = () => {  
            todoService.findAll()
                .then(todos => controller.todos = todos);
        }

        controller.create = (todo) => {
            todoService.create(todo)
                .then((newTodo) => {
                    controller.todos.unshift(newTodo);
                    controller.todo = {};
                    controller.createForm.$setPristine();
                });
        }

        controller.update = (todo) => {
            delete todo['editing'];
            todoService.update(todo)
                .then(() => {
                    updateTodo(todo);
                });
        }

        controller.updateCompleted = (todo) => {
            todo.completed = !todo.completed;
            controller.update(todo);
        }

        controller.delete = (id) => {
            if (confirm('Are you sure you want to remove this to do forever?')) {
                todoService.delete(id)
                    .then(removeFromTodos(id));
            }
        }

        controller.add = () => {
            controller.todo = {
                completed: false
            }
        }
        controller.remove = () => {
            controller.todo = null;
        }

        let getIndexBy = function(id) {
            let todo = controller.todos.filter((c) => c._id === id)[0];
            return controller.todos.indexOf(todo);
        }

        let removeFromTodos = function (id) {            
            controller.todos.splice(getIndexBy(id), 1);
        }

        let updateTodo = function(todo) {
            controller.todos[getIndexBy(todo._id)] = todo;
        }

        controller.findAll();
    };
})();