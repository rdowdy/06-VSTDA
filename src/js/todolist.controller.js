angular.module('TodoApp').controller('TodoListCtrl', function($scope, $rootScope, $filter, todoListFactory) {
    $scope.sortBy = function(expression, reverse) {
        todoListFactory.sortTodoList(expression, reverse);
    };

    $scope.delete = function(item) {
        todoListFactory.deleteTodo(item).then(function() {
            $rootScope.$broadcast("refresh");
        });
    };

    $scope.edit = function(item, isDoneEditing) {
        if(isDoneEditing) {
            todoListFactory.editTodo(item).then(function() {
                // do anything here?
            });
        }
    };
});