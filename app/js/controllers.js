'use strict';

/* Controllers */

var PhoneListCtrl = function($scope, $http) {
  $http.get('contacts/contacts.json').success(function (data) {
    $scope.contacts = data;
  });

  $scope.sortOrder = 'id';
}
