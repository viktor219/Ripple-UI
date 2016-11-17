/*
 *   Copyright 2015 Ripple OSI
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
  .factory('ClinicalNotes', function ($http) {

    var all = function (patientId) {
      return $http.get('/api/patients/' + patientId + '/clinicalNotes');
    };

    var get = function (patientId, compositionId, source) {
      return $http.get('/api/patients/' + patientId + '/clinicalNotes/' + compositionId + '?source=' + source)
    };

    var create = function (patientId, composition) {
      return $http.post('/api/patients/' + patientId + '/clinicalNotes', composition);
    };

    var update = function (patientId, composition) {
      return $http.put('/api/patients/' + patientId + '/clinicalNotes', composition);
    };

    return {
      all: all,
      get: get,
      create: create,
      update: update
    };
  });
