/*
 *   Copyright 2016 Ripple OSI
 *
 *      Licensed under the Apache License, Version 2.0 (the "License");
 *      you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 *      Unless required by applicable law or agreed to in writing, software
 *      distributed under the License is distributed on an "AS IS" BASIS,
 *      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *      See the License for the specific language governing permissions and
 *      limitations under the License.
 */

'use strict';

angular.module('ripple-ui')
  .factory('DocumentService', function ($http) {

    var findAllDocuments = function (patientId) {
      return $http.get('/api/patients/' + patientId + '/documents');
    };

    var findReferral = function (patientId, referralId, source) {
      return $http.get('/api/patients/' + patientId + '/documents/referral/' + referralId + '?source=' + source);
    };

    var findDischarge = function (patientId, dischargeId, source) {
      return $http.get('/api/patients/' + patientId + '/documents/discharge/' + dischargeId + '?source=' + source);
    };

    var uploadReferral = function (patientId, referral) {
      return $http.post('/api/patients/' + patientId + '/documents/referral', referral);
    };

    var uploadDischarge = function (patientId, discharge) {
      return $http.post('/api/patients/' + patientId + '/documents/discharge', discharge);
    };

    return {
      findAllDocuments: findAllDocuments,
      findReferral: findReferral,
      findDischarge: findDischarge,
      uploadReferral: uploadReferral,
      uploadDischarge: uploadDischarge
    };

  });
