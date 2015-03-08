function searchCtrl($scope, requestService) {
    
    var urlUsers = '/users';

    var users_response = requestService.get(urlUsers);

    users_response.success(function(res) {
        $scope.users = res;
    });

    $scope.get_profile = function(profile_id){
        window.location.href = "/profile/"+profile_id;
    }

}

angular
    .module('searchApp')
    .controller('searchCtrl', searchCtrl);