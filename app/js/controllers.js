'use strict';

/* Controllers */

var ContactControl = function($scope, $http) {
  var updateContacts = function () {
    $http.get('contacts/contacts.json').success(function (data) {
        $scope.contacts = data;
        window.localStorage.setItem("data", JSON.stringify(data));
    }).error(function (e) {
  	    $scope.contacts = JSON.parse(window.localStorage.getItem("data"));
    });
  };

  updateContacts();

  $scope.update = function () {
    updateContacts();
  };

  $scope.sortOrder = 'id';
}
