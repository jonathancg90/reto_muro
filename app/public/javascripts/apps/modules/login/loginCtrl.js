function loginCtrl($scope, requestService) {
    
    var urlLogin = '/login';
    var urlLogin = '';
    $scope.newUser = {};

    $scope.register = function(){
        var login_response = requestService.post(urlLogin, data);

        login_response.success(function(res) {
            
        });
    }

    $scope.login = function(){
        var data = {
            'username': "kratos",
            'password': "kratos"
        };

        var login_response = requestService.post(urlLogin, data);

        login_response.success(function(res) {
            
        });
    }
}

angular
    .module('loginApp')
    .controller('loginCtrl', loginCtrl);