'use strict'

app.controller('LoginCtrl', function($scope, $http, $location){
	$scope.title = "Carbon Dating"

	$scope.login = () => {
		const user = {
			userName: $scope.userName,
			password: $scope.password
		}

		$http.post('/api/login', user)
			.then(() => {
				$location.path('/profile')
			})
	}

})
