/**
 * Created by donaldyu on 11/1/2016.
 */
var app = angular.module('app', [
    'ionic',
    'ngAnimate'
]);

app.addScriptDependence = function(dependences) {
    return function($q, $rootScope) {
        var defer = $q.defer();
        $script(dependences, function() {
            $rootScope.$apply(function() {
                defer.resolve();
            });
        });
        return defer.promise;
    };
};