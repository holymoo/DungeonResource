﻿
myApp.controller('UpdateSpellController', ['$scope', '$log', '$http', '$location', function ($scope, $log, $http, $location) {

    $scope.addSpellLevel = function () {

        var spellLevel = {
            SpellClass: $scope.spellClass,
            Level: $scope.spellLevel
        };

        // Add the class to the 
        $scope.spell.SpellLevels.push(spellLevel);

        // Clear out the data on those textboxes
        $scope.spellClass = undefined;
        $scope.spellLevel = undefined;

    };

    $scope.remove = function (array, index) {
        array.splice(index, 1);
    };

    $scope.readSpell = function () {

        var url = window.location.pathname;
        var spellId = url.substring(url.lastIndexOf('/') + 1);

        var config = {
            method: 'GET',
            url: '/api/spell/' + spellId
        };

        $http(config).
          success(function (data) {
              $scope.spell = data;
          });

    };

    $scope.updateSpell = function () {

        var config = {
            method: 'POST',
            url: 'Update',
            data: $scope.spell
        };

        $http(config).
          success(function (data) {

              // Move the user back to the homepage
              window.location = '/';

          });

    };

    $scope.saveError = false;

}]);