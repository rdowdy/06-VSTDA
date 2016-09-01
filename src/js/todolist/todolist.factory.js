(function() {
    'use strict';

    angular
        .module('TodoApp')
        .factory('todoListFactory', todoListFactory);

    todoListFactory.$inject = ['$filter', '$http'];

    /* @ngInject */
    function todoListFactory($filter, $http) {
        var url = "http://localhost:58048/api/todos";
        // this var is temporary until the list grouping
        // is set up on the front end
        var defaultGroupId = 12;
        var service = {
            addTodoToList: addTodoToList,
            editTodo: editTodo,
            deleteTodo: deleteTodo,
            getTodoList: getTodoList
        };
        return service;

        function addTodoToList(item) {
            item.todoGroupId = 12;
            return $http.post(url, item);
        }

        function editTodo(changedTodo) {
            return $http.put(url + "/" + changedTodo.todoId, changedTodo);
        }

        function deleteTodo(toDelete) {
            return $http.delete(url + "/" + toDelete.todoId);
        }

        function getTodoList() {
            return $http.get(url);
        }
    }
})();
