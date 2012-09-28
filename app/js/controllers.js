'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('contacts/contacts.json').success(function (data) {
    $scope.contacts = data;
  });

  $scope.sortOrder = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];
