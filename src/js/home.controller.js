angular.module('TodoApp').controller('HomeCtrl', function($scope, $filter) {
    $scope.list = [];
    $scope.reverse = false;
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

    // add todo item to the todo list
    // then reset the input fields
    $scope.addTodo = function() {
        $scope.list.push($scope.item);
        $scope.item = {};
    };

    // sort the todo list by the given expression
    $scope.sortBy = function(expression, reverse) {
        $scope.list = $filter('orderBy')($scope.list, expression, reverse);
    };

});