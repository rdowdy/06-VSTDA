(function() {
    'use strict';

    angular
        .module('TodoApp')
        .factory('todoListFactory', todoListFactory);

    todoListFactory.$inject = ['$filter', '$http'];

    /* @ngInject */
    function todoListFactory($filter, $http) {
        var url = "http://localhost:58048/api";
        // this var is temporary until the list grouping
        // is set up on the front end
        var service = {
            addTodoToList: addTodoToList,
            editTodo: editTodo,
            deleteTodo: deleteTodo,
            getTodoList: getTodoList,
            getAllTodoGroups: getAllTodoGroups
        };
        return service;

        function addTodoToList(item) {
            return $http.post(url + "/todos", item);
        }

        function editTodo(changedTodo) {
            return $http.put(url + "/todos/" + changedTodo.todoId, changedTodo);
        }

        function deleteTodo(toDelete) {
            return $http.delete(url + "/todos/" + toDelete.todoId);
        }

        function getTodoList() {
            return $http.get(url + "/todos/");
        }

        function getAllTodoGroups() {
            return $http.get(url + "/todogroups");
        }
    }
})();
