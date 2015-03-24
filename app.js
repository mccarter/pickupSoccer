var app = angular.module("pickupSoccer", ["firebase"]);
//Now the $firebaseObject, $firebaseArray, and $firebaseAuth services are available to be injected into any controller, service, or factory.

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://<your-firebase>.firebaseio.com/");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
});