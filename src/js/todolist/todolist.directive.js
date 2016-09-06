(function() {
    'use strict';

    angular
        .module('TodoApp')
        .directive('todoList', todoList);

    todoList.$inject = [];

    /* @ngInject */
    function todoList() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: 'TodoListCtrl',
            controllerAs: 'todoList',
            restrict: 'E',
            scope: {
                list: "=",
                name: "=",
                id: "="
            },
            templateUrl: "js/todolist/todolist.tmpl.html"
        };
        return directive;
    }

})();