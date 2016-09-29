'use strict'

app.controller('ProfileCtrl', function($scope, $http, $location){
	$scope.destination = {
		loc: "/#/match",
		name: 'Matches'
	}
	$scope.logout = () => {
		$http.post('/api/logout')
			.then(() => $location.path('/'))
	}
	$http.get('/api/profile')
		.then((userObj) => {
			$scope.user = userObj.data
		})
})
