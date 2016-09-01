(function() {
    'use strict';

    angular
        .module('TodoApp')
        .directive('addTodo', addTodo);

    addTodo.$inject = [];

    /* @ngInject */
    function addTodo() {
        var directive = {
            bindToController: true,
            controller: 'AddTodoCtrl',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                addToList: "&"
            },
            templateUrl: "js/addtodo.tmpl.html"
        };
        return directive;
    }
})();