angular.module('TodoApp').controller("AddTodoCtrl", function($scope, $rootScope, todoListFactory) {
    
    // defaults
    $scope.item = {};
    $scope.item.priority = 1;

    // add todo item to the todo list
    // then reset the input fields
    $scope.addTodo = function() {
        if($scope.item.description.length > 0) {
            // save the selected priority radio
            var prevPriority = $scope.item.priority;

            todoListFactory.addTodoToList($scope.item).then(function() {
                $rootScope.$broadcast("refresh");
            });

            // reset the form, keeping the most recently
            // used priority
            $scope.item = {};
            $scope.item.priority = prevPriority;
        }
    };
});