'use strict';

/* Controllers */

var PhoneListCtrl = function($scope, $http) {
  $http.get('contacts/contacts.json').success(function (data) {
    $scope.contacts = data;
    window.localStorage.setItem("data", JSON.stringify(data));
  }).error(function (e) {
  	$scope.contacts = JSON.parse(window.localStorage.getItem("data"));
  });

  $scope.sortOrder = 'id';
}
