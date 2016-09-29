'use strict'

app.controller('ProfileCtrl', function($scope, $http){
	$scope.title = "profile"
	$http.get('/api/profile')
		.then((userObj) => {
			$scope.user = userObj.data
		})
})
