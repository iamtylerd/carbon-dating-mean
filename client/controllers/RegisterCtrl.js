'use strict'

app.controller('RegisterCtrl', function($scope, $http, $location){
	$scope.title = "Carbon Dating"
	$scope.register = () => {
		const userModel = {
			userName: $scope.userName,
			password: $scope.password,
			info: {
				customId: Date.now().toString(),
				name: $scope.name,
				interests: $scope.interests,
				about: $scope.about,
				email: $scope.email,
				gender: $scope.gender,
				genPref: $scope.genPref,
				picture: $scope.picture
			}
		}
		console.log(userModel)
		$http.post('/api/register', userModel)
			.then(() => {
				$location.path('/')
			})
	}
})
