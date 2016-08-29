angular.module('TodoApp').factory("todoListFactory", function($http, $filter) {
    var port = "58048";
    return {
        addTodoToList: function(item) {
            return $http.post("http://localhost:" + port + "/api/todo", item);
        },
        editTodo: function(changedTodo) {
            return $http.put("http://localhost:" + port + "/api/todo", changedTodo);
        },
        deleteTodo: function(toDelete) {
            return $http.delete("http://localhost:" + port + "/api/todo", {"params" : toDelete});
        },
        getTodoList: function() {
            return $http.get("http://localhost:" + port + "/api/todo");
        }
    };
});