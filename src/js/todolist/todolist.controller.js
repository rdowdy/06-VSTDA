(function() {
    'use strict';

    angular
        .module('TodoApp')
        .controller('TodoListCtrl', TodoListCtrl);

    TodoListCtrl.$inject = ['$filter', 'todoListFactory'];

    /* @ngInject */
    function TodoListCtrl($filter, todoListFactory) {
        var vm = this;

        vm.selected = null;

        vm.addTodo = addTodo;
        vm.delete = deleteTodo;
        vm.edit = editTodo;
        vm.sortBy = sortBy;

        ////////////////

        function addTodo(item) {
            item.todoGroupId = vm.id;
            todoListFactory.addTodoToList(item).then(function(response) {
                vm.list.push(response.data);
            });
        }

        function deleteTodo(item, index) {
            todoListFactory.deleteTodo(item).then(function() {
                vm.list.splice(index, 1);
            });
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
    }
})();
