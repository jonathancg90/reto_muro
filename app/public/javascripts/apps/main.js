(function() {

    function config($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    }
    angular.module('mainApp', [
        'requestApp',
        'loginApp'
    ])
        .config(config);
})();