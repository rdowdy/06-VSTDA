angular.module('TodoApp').controller('AppCtrl', function($scope, todoListFactory) {
    //$scope.list = todoListFactory.getTodoList();
    todoListFactory.getTodoList().then(function(response) {
        console.log(response.data);
    });
    // for the drag and drop list
    $scope.selected = null;
});