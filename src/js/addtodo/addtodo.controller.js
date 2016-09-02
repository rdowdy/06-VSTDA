(function() {
    'use strict';

    angular
        .module('TodoApp')
        .controller('AddTodoCtrl', AddTodoCtrl);

    AddTodoCtrl.$inject = [];

    /* @ngInject */
    function AddTodoCtrl() {
        var vm = this;
        vm.item = {};
        vm.item.priority = 1;

        vm.addItem = function(prevPriority) {
            if(vm.item.description !== undefined &&
                vm.item.description !== "") {
                vm.addToList()(vm.item);
                vm.item = {};
                vm.item.priority = prevPriority;
            }
        };

        vm.nextPriority = function() {
            vm.item.priority++;
            if(vm.item.priority === 4) {
                vm.item.priority = 1;
            }
        };
    }
})();