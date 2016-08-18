angular.module('TodoApp').controller('TodoListCtrl', function($scope, $filter, todoListFactory) {
    $scope.sortBy = function(expression, reverse) {
        todoListFactory.sortTodoList(expression, reverse);
    };

    $scope.delete = function(item) {
        todoListFactory.deleteTodo(item);
    };
});