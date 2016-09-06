(function() {
    'use strict';

    angular
        .module('TodoApp')
        .controller('todoGroupsCtrl', todoGroupsCtrl);

    todoGroupsCtrl.$inject = ['todoListFactory'];

    /* @ngInject */
    function todoGroupsCtrl(todoListFactory) {
        var vm = this;

        vm.todoGroups = [];

        getAllGroups();
        ////////////////

        function getAllGroups() {
            todoListFactory.getAllTodoGroups().then(function(response) {
                vm.todoGroups = response.data;
            });
        }
        
    }
})();