'use strict'

app.controller('ProfileCtrl', function($scope, $http){
	$scope.destination = {
		loc: "/#/match",
		name: 'Matches'
	}
	$http.get('/api/profile')
		.then((userObj) => {
			$scope.user = userObj.data
		})
})
