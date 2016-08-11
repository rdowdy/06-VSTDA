angular.module('TodoApp').controller('AppCtrl', function($scope, todoListFactory) {
    $scope.list = todoListFactory.getTodoList();
    // for the drag and drop list
    $scope.selected = null;
});