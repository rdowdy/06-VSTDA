angular.module('TodoApp').controller('AppCtrl', function($scope, $rootScope, $filter, todoListFactory) {
    
    $rootScope.$on("refresh", refresh);

    refresh();

    $scope.sortBy = function(expression, reverse) {
        var expressions = [expression, 'text'];
        $scope.list = $filter('orderBy')($scope.list, expressions, reverse);
    };

    function refresh() {
        todoListFactory.getTodoList().then(function(response) {
            $scope.list = response.data;
        });
    }

    // for the drag and drop list
    $scope.selected = null;
});
