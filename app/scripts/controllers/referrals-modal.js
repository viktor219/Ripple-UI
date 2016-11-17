'use strict';

angular.module('ripple-ui')
  .controller('ReferralsModalCtrl', function ($scope, $modalInstance, UserService, referral, patient, modal) {

    $('#dateofreferral').datepicker({ dateFormat: 'dd-MMM-y' });

    UserService.findCurrentUser().then( function (result) {
      $scope.currentUser = result.data;
    });

    $scope.referral = referral;
    $scope.patient = patient;
    $scope.modal = modal;

    if (modal.title === 'Create Referral') {
      $scope.referral.dateCreated = new Date().toISOString().slice(0, 10);
      $scope.author = $scope.currentUser;
    }
    else {
      $scope.referral.dateCreated = new Date($scope.referral.dateCreated).toISOString().slice(0, 10);
      $scope.referral.dateOfReferral = new Date($scope.referral.dateOfReferral).toISOString().slice(0, 10);
    }

    $scope.referralCreatedDatepicker = function ($event, name) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[name] = true;
    };

    $scope.dateofReferralDatepicker = function ($event, name) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[name] = true;
    };

    $scope.ok = function (referralForm, referral) {
      $scope.formSubmitted = true;

      if (referralForm.$valid) {
        $modalInstance.close(referral);
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

    $scope.validate = function (form, name, index) {
      var errorToCheckFor = name + index;

      for (var error in form.$error.required) {
        var errorName = form.$error.required[error].$name;

        if (errorName === errorToCheckFor) {
          return true;
        }
      }
    };

    $scope.validateDirty = function (form, name, index) {
      var errorToCheckFor = name + index;
      return form[errorToCheckFor].$dirty && form[errorToCheckFor].$invalid;
    };

    $scope.validateClean = function (form, name, index) {
      var errorToCheckFor = name + index;
      return form[errorToCheckFor].$dirty && form[errorToCheckFor].$valid;
    };

  });
