angular.module('TodoApp').controller('HomeCtrl', function($scope) {
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

    $scope.addTodo = function() {
        $scope.list.push($scope.item);
        $scope.item = {};
    };
});