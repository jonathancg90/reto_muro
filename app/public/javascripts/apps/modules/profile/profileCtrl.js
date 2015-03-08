function profileCtrl($scope, requestService, factoryConstant) {
    
    var urlPost = '/profile/comment',
        urlCommentUsers = '/profile/comment/users';

    var profile_id = factoryConstant.profile_id;
    $scope.emails = [];

    var users_response = requestService.get(urlCommentUsers);

    users_response.success(function(res) {
        $scope.emails = res[0]
    });

    $scope.get_email = function(user_id) {
        var email = ''; 
        angular.forEach($scope.emails, function(value, key) {
            if(value._id == user_id){
                email = value.email;
            }
        });
        return email;
    }

    $scope.save_comment = function(){

        var data = {
            to_id: profile_id,
            comment: $scope.comment,
        };
        var login_response = requestService.post(urlPost, data);

        login_response.success(function(res) {
            debugger
        });
    }

}

angular
    .module('profileApp')
    .controller('profileCtrl', profileCtrl);