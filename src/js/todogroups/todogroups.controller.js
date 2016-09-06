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
        vm.newGroup = {};

        vm.addTodoGroup = addTodoGroup;

        getAllGroups();
        ////////////////

        function getAllGroups() {
            todoListFactory.getAllTodoGroups().then(function(response) {
                vm.todoGroups = response.data;
            });
        }

        function addTodoGroup() {
            todoListFactory.addNewTodoGroup(vm.newGroup).then(function(response) {
                vm.todoGroups.unshift(response.data);
            });
        }
        
    }
})();