angular.module('TodoApp').controller('HomeCtrl', function($scope, $filter) {
    $scope.list = [];
    $scope.priorities = [
        {
            title: "High",
            class: "high",
            num: 1
        },
        {
            title: "Medium",
            class: "medium",
            num: 2
        },
        {
            title: "Low",
            class: "low",
            num: 3
        }
    ];
    $scope.reverse = false;

    $scope.addTodo = function() {
        $scope.list.push($scope.item);
        $scope.item = {};
    };

    $scope.sortBy = function(expression, reverse) {
        $scope.list = $filter('orderBy')($scope.list, expression, reverse);
    };

});