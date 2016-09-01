angular.module('TodoApp')
.directive('onEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            var key = typeof event.which === "undefined" ? event.keyCode : event.which;
            if(key === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.onEnter);
                });

                event.preventDefault();
            }
        });
    };
});