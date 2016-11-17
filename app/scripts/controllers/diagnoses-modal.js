'use strict';

angular.module('ripple-ui')
  .controller('DiagnosesModalCtrl', function ($scope, $modalInstance, UserService, diagnosis, patient, modal) {

    UserService.findCurrentUser().then( function (result) {
      $scope.currentUser = result.data;
    });

    $scope.diagnosis = diagnosis;
    $scope.patient = patient;
    $scope.modal = modal;
    $scope.protocol = 'http://';

    if (modal.title === 'Edit Problem / Diagnosis') {
      $scope.diagnosis.dateSubmitted = new Date().toISOString().slice(0, 10);
      $scope.diagnosis.dateOfOnset = new Date($scope.diagnosis.dateOfOnset).toISOString().slice(0, 10);
    }else {
      $scope.diagnosis.dateSubmitted = new Date().toISOString().slice(0, 10);
      $scope.diagnosis.code = '12393890';
    }

    $scope.changeProtocol = function (protocol) {
      switch (protocol) {
        case 'http':
          $scope.protocol = 'http://';
          break;
        case 'https':
          $scope.protocol = 'https://';
          break;
        default:
          $scope.protocol = 'http://';
      }
    };

    $scope.ok = function (diagnosisForm, diagnosis) {
      $scope.formSubmitted = true;

      if (diagnosisForm.$valid) {
        $modalInstance.close(diagnosis);
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.openDatepicker = function ($event, name) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[name] = true;
    };

  });
