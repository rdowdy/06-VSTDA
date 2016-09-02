angular.module('TodoApp')
.directive('onTab', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            var key = typeof event.which === "undefined" ? event.keyCode : event.which;
            if(key === 9) {
                scope.$apply(function (){
                    scope.$eval(attrs.onTab);
                });

                event.preventDefault();
            }
        });
    };
});