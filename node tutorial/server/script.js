(function(angular) {
  'use strict';
angular.
 module('myServiceModule', []).
  controller('MyController', ['$scope', 'notify','alka', function($scope, notify , alka) {
    $scope.callNotify = function(msg) {
      notify(msg);
	  alka();
    };
  }]).
 factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length === 3) {
        win.alert(msgs.join('\n'));
        msgs = [];
      }
    };
  }]).
  factory('alka',function(){
    return  function(){ 
		alert("holas")
	} ;
  })
  ;
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/