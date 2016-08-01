'use strict';
/*global $ */

angular.module('ssicRApp')
  .controller('MainCtrl', ['$rootScope', '$scope',
	function ($scope) {
		$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  }]);
