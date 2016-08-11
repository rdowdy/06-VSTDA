angular.module('TodoApp').controller("AddTodoCtrl", function($scope, todoListFactory) {
    // priorities and their associated datda
    $scope.priorities = {
        "High": {
            class: "high",
            num: 1
        },
        "Medium": {
            class: "medium",
            num: 2
        },
        "Low": {
            class: "low",
            num: 3
        }
    };
    // defaults
    $scope.item = {};
    $scope.item.priority = $scope.priorities.High;

    // add todo item to the todo list
    // then reset the input fields
    $scope.addTodo = function() {
        if($scope.item.text.length > 0) {
            todoListFactory.addTodoToList($scope.item);
            // default 
            $scope.item = {};
            $scope.item.priority = $scope.priorities.High;
        }
    };
});