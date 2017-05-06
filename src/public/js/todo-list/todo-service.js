(function () {
    'use strict';

    angular
        .module('todoList')
        .service('todoService', ['$http', 'apiFactory', todoService]);

    function todoService($http, apiFactory) {
        let service = this;

        service.find = function () {
            return $http({
                    method: 'GET',
                    url: apiFactory.getTodoUrl()
                })
                .then(result => result.data);
        };
    };
})();