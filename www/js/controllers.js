angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Firebase1) {
  var ref1 = Firebase1.getDB().ref();
  ref1.once("value")
    .then(function(snapshot) {
      console.log("first database", snapshot.val());
    })
})

.controller('ChatsCtrl', function($scope, Chats, Firebase2) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  
  var ref2 = Firebase2.getDB().ref();
  ref2.once("value")
    .then(function(snapshot) {
      console.log("second database", snapshot.val());
    })
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
