(function() {
    'use strict';

    angular
        .module('TodoApp')
        .factory('todoListFactory', todoListFactory);

    todoListFactory.$inject = ['$filter', '$http'];

    /* @ngInject */
    function todoListFactory($filter, $http) {
        var service = {
            addTodoToList: addTodoToList,
            editTodo: editTodo,
            deleteTodo: deleteTodo,
            getTodoList: getTodoList
        };
        return service;

        function addTodoToList(item) {
            var todos = JSON.parse(localStorage.getItem("todos")) || [];

            item.todoId = UUIDjs.create(4).hex;
            todos.push(item);

            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }

        function editTodo(changedTodo) {
            var todos = JSON.parse(localStorage.getItem("todos"));

            var todoIndex = todos.findIndex((element) => {
                return element.todoId === changedTodo.todoId;
            });

            todos[todoIndex] = changedTodo;
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }

        function deleteTodo(toDelete) {
            var todos = JSON.parse(localStorage.getItem("todos"));

            var todoIndex = todos.findIndex((element) => {
                return element.todoId === toDelete.todoId;
            });

            todos.splice(todoIndex, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }

        function getTodoList() {
            return JSON.parse(localStorage.getItem("todos")) || [];
        }
    }
})();
