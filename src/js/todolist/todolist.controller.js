(function() {
    'use strict';

    angular
        .module('TodoApp')
        .controller('TodoListCtrl', TodoListCtrl);

    TodoListCtrl.$inject = ['$rootScope', '$filter', 'todoListFactory'];

    /* @ngInject */
    function TodoListCtrl($rootScope, $filter, todoListFactory) {
        var vm = this;

        vm.selected = null;

        vm.addTodo = addTodo;
        vm.delete = deleteTodo;
        vm.edit = editTodo;
        vm.sortBy = sortBy;
        vm.refresh = refresh;

        refresh();

        ////////////////

        function addTodo(item) {
            vm.list = todoListFactory.addTodoToList(item);
        }

        function deleteTodo(item, index) {
            vm.list = todoListFactory.deleteTodo(item);
        }

        function editTodo(item, isDoneEditing) {
            if (isDoneEditing) {
                todoListFactory.editTodo(item);
            }
        }

        function sortBy(expression, reverse) {
            var expressions = [expression, 'text'];
            vm.list = $filter('orderBy')(vm.list, expressions, reverse);
        }

        function refresh() {
            vm.list = todoListFactory.getTodoList();
        }

    }
})();
