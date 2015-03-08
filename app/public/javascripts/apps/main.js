(function() {

    function config($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    }
    function run(DjangoConstants, $http) {
        $http.defaults.headers.post['X-CSRFToken'] = DjangoConstants.csrfToken;
    }
    angular.module('mainApp', [
        'requestApp',
        'homeApp'
    ])
        .config(config)
        .run(run);
})();