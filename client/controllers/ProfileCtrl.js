'use strict'

app.controller('ProfileCtrl', function($scope, $http){
	$scope.title = "profile"
	$http.get('/api/profile')
		.then((userObj) => {
			console.log(userObj)
			// $scope.user = userObj
		})
	// $scope.user = {
	// 	userName: "testUsername",
	// 	password: "12345678",
	// 	info: {
	// 		id: 1,
	// 		name: "Carlos Cheadle",
	// 		about: "I'm totally not Don Cheadle",
	// 		email: "carlos@doncheadle.com",
	// 		gender: "male",
	// 		genPref: "female",
	// 		picture: "http://www.vipcutouts.com/media/com_hikashop/upload/thumbnails/600x760f/don-cheadle-celebrity-mask.jpg",
	// 		interests: ["Dogs", "Gambling", "Don Cheadle"],
	// 		matches: [
	// 			{
	// 				name: "Tina Turner",
	// 				picture: "http://a3.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTIyMzk5Mjg4NzQzMTM0NzMy.jpg",
	// 				id: "72461271"
	// 			},
	// 			{
	// 				name: "Jeff Goldblum",
	// 				picture: "http://screencrush.com/442/files/2014/02/jurass-park-4-world-jeff-goldblum.jpg?w=720&cdnnode=1",
	// 				id: "153783"
	// 			},
	// 			{
	// 				name: "Summer",
	// 				picture: "http://vignette2.wikia.nocookie.net/rickandmorty/images/5/53/Summer_Wide-mouth_S1E11.JPG/revision/latest?cb=20150908101840",
	// 				id: "6146470164"
	// 			}
	// 		]
	// 	}
	// }
})
