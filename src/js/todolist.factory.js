angular.module('TodoApp').factory("todoListFactory", function($http, $filter) {
    var url = "http://localhost:58048/api/todos";
    var defaultGroupId = 12;
    return {
        addTodoToList: function(item) {
            item.todoGroupId = 12;
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