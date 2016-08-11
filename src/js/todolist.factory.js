angular.module('TodoApp').factory("todoListFactory", function($filter) {
    var _list = [];
    return {
        addTodoToList: function(item) {
            _list.unshift(item);
            return _list;
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
            return _list;
        }
    };
});