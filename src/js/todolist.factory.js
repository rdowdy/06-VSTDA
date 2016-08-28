angular.module('TodoApp').factory("todoListFactory", function($http, $filter) {
    var _list = [];
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
        // sort the todo list by the given expression
        sortTodoList: function(expression, reverse) {
            // sort first by the expression, then alphabetically
            // this ensures consistent results
            var expressions = [expression, 'text'];
            var newList = $filter('orderBy')(_list, expressions, reverse);
            
            // the orderBy filter doesn't sort inplace..
            // do this so that references
            // don't need to be updated
            for(var i = 0; i < _list.length; i++) {
                _list[i] = newList[i];
            }
            return _list;
        },

        getTodoList: function() {
            return $http.get("http://localhost:" + port + "/api/todo");
        }
    };
});