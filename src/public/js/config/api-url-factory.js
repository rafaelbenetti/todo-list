(function () {
    'use strict';

    angular
        .module('todoList')
        .factory('apiFactory', apiFactory);

    function apiFactory() {

        const urlBase = location.origin;

        var getTodoUrl = function () {
            return `${urlBase}/todo`;
        };

        return {
            getTodoUrl: getTodoUrl
        };
    };
})();