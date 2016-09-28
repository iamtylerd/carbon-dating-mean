'use strict'

app.controller('RegisterCtrl', function($scope, $http, $location){
	$scope.title = "Carbon Dating"
	$scope.register = () => {
		const userModel = {
			userName: $scope.userName,
			password: $scope.password,
			info: {
				id: Date.now(),
				name: $scope.name,
				interests: $scope.interests,
				about: $scope.about,
				email: $scope.email,
				gender: $scope.gender,
				genPref: $scope.genPref,
				picture: $scope.picture
			}
		}

		$http.post('/api/register', userModel)
			.then(() => {
				$location.redirect('/login')
			})
	}
})
