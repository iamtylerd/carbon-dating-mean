'use strict'

app.controller('MatchCtrl', function($scope, $http, $location){
	//Navbar functions
	$scope.destination = {
		loc: "/#/profile",
		name: 'Profile'
	}
	$scope.logout = () => {
		$http
			.post('/api/logout')
			.then(() => $location.path('/'))
	}

	//Get match function
	$scope.getMatch = () => {
		console.log('http call');
		$http.get('/api/matches')
			.then((res) => {
				console.log(res);
				$scope.match = res
			})
	}
	$scope.getMatch()

	//Hot/Not button functions
	$scope.selected = () => {
		let user = $scope.user
		let match = $scope.match
		let matched = {
			id: match.info.id,
			name: match.info.name,
			picture: match.info.picture
		}
		let userInfo = user.info
		userInfo.seen.push(match.info.id)
		userInfo.matches.push(matched)
		// $http.patch(`/api/user:${userInfo.id}`)
		$location.path('/match')
	}
	$scope.rejected = () => {
		let user = $scope.user
		let match = $scope.match
		let userInfo = user.info
		userInfo.seen.push(match.info.id)
		// $http.patch(`/api/user:${userInfo.id}`)
		$location.path('/match')
	}


})
