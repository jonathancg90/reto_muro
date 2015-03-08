function loginCtrl($scope, requestService) {
    
    var urlLogin = '';
    $scope.prueba = "Jonathan";
    var data = {
        'username': "kratos",
        'password': "kratos"
    };

    var login_response = requestService.post(urlLogin, data);

    login_response.success(function(res) {
        
    });
}

angular
    .module('loginApp')
    .controller('loginCtrl', loginCtrl);