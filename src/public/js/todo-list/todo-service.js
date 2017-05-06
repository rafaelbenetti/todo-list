(function () {
    'use strict';

    angular
        .module('todoList')
        .service('todoService', ['$http', 'apiFactory', todoService]);

    function todoService($http, apiFactory) {
        let service = this;

        service.find = function (search) {
            return $http({
                    method: 'GET',
                    url: `${apiFactory.getTodoUrl()}/${search}`
                })
                .then(result => result.data);
        };

        service.findAll = function () {
            return $http({
                    method: 'GET',
                    url: apiFactory.getTodoUrl()
                })
                .then(result => result.data);
        };

        service.create = function (todo) {
            return $http({
                    method: 'POST',
                    url: apiFactory.getTodoUrl(),
                    data: todo
                })
                .then(result => result.data);
        };

        service.update = function (todo) {
            return $http({
                    method: 'PUT',
                    url: apiFactory.getTodoUrl(),
                    data: todo
                })
                .then(result => result.data);
        };

        service.delete = function (id) {
            return $http({
                    method: 'DELETE',
                    url: `${apiFactory.getTodoUrl()}/${id}`
                })
                .then(result => result.data);
        };
    };
})();