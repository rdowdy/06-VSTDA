angular.module('TodoApp').controller('AppCtrl', function($scope, $rootScope, todoListFactory) {
    
    $rootScope.$on("refresh", refresh);

    refresh();

    function refresh() {
        todoListFactory.getTodoList().then(function(response) {
            $scope.list = response.data;
        });
    }

    // for the drag and drop list
    $scope.selected = null;
});
