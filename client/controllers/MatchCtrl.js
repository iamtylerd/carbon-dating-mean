'use strict'

app.controller('MatchCtrl', function($scope, $http, $location){
	$scope.destination = {
		loc: "/#/profile",
		name: 'Profile'
	}
	//test data
	$scope.match = {
		userName: "testUsername",
		password: "12345678",
		info: {
			id: 1,
			name: "Carlos Cheadle",
			about: "I'm totally not Don Cheadle",
			email: "carlos@doncheadle.com",
			gender: "male",
			genPref: "female",
			picture: "http://www.vipcutouts.com/media/com_hikashop/upload/thumbnails/600x760f/don-cheadle-celebrity-mask.jpg",
			interests: ["Dogs", "Gambling", "Don Cheadle"],
			seen: [],
			matches: [
				{
					name: "Tina Turner",
					picture: "http://a3.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTIyMzk5Mjg4NzQzMTM0NzMy.jpg",
					id: "72461271"
				},
				{
					name: "Jeff Goldblum",
					picture: "http://screencrush.com/442/files/2014/02/jurass-park-4-world-jeff-goldblum.jpg?w=720&cdnnode=1",
					id: "153783"
				},
				{
					name: "Summer",
					picture: "http://vignette2.wikia.nocookie.net/rickandmorty/images/5/53/Summer_Wide-mouth_S1E11.JPG/revision/latest?cb=20150908101840",
					id: "6146470164"
				}
			]
		}
	}
	$scope.user = {
		userName: "testUsername2",
		password: "12345678",
		info: {
			id: 2,
			name: "Carlos Cheadle2",
			about: "I'm totally not Don Cheadle II",
			email: "carlos@doncheadle.com2",
			gender: "male",
			genPref: "female",
			picture: "http://www.vipcutouts.com/media/com_hikashop/upload/thumbnails/600x760f/don-cheadle-celebrity-mask.jpg",
			interests: ["Dogs", "Gambling", "Don Cheadle"],
			seen: [],
			matches: [
				{
					name: "Tina Turner",
					picture: "http://a3.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTIyMzk5Mjg4NzQzMTM0NzMy.jpg",
					id: "72461271"
				},
				{
					name: "Jeff Goldblum",
					picture: "http://screencrush.com/442/files/2014/02/jurass-park-4-world-jeff-goldblum.jpg?w=720&cdnnode=1",
					id: "153783"
				},
				{
					name: "Summer",
					picture: "http://vignette2.wikia.nocookie.net/rickandmorty/images/5/53/Summer_Wide-mouth_S1E11.JPG/revision/latest?cb=20150908101840",
					id: "6146470164"
				}
			]
		}
	}
	//end test data
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
