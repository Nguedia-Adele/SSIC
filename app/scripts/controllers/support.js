'use strict';
/*global $ */

angular.module('ssicApp')
	.controller('supportCtrl', ['$scope', function($scope){

		$(document).ready(function(){
           $('.slider').slider({full_width: true});
        });
        
	}])