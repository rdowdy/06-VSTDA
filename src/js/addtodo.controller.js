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

        vm.addItem = function() {
            vm.addToList()(vm.item);
            vm.item = {};
            vm.item.priority = prevPriority;
        };
    }
})();