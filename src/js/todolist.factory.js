angular.module('TodoApp').factory("todoListFactory", function($http, $filter) {
    var url = "http://localhost:58048/api/todos";
    return {
        addTodoToList: function(item) {
            return $http.post(url, item);
        },
        editTodo: function(changedTodo) {
            return $http.put(url + "/" + changedTodo.todoId, changedTodo);
        },
        deleteTodo: function(toDelete) {
            return $http.delete(url + "/" + toDelete.todoId);
        },
        getTodoList: function() {
            return $http.get(url);
        }
    };
});