angular.module('TodoApp').controller("AddTodoCtrl", function($scope, $rootScope, todoListFactory) {
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