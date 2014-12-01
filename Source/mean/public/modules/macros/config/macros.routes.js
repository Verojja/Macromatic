'use strict';

// Setting up route
angular.module('macros').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listMacros', {
			url: '/articles',
			templateUrl: 'modules/macros/views/list-macros.view.html'
		}).
		state('createMacro', {
			url: '/macros/create',
			templateUrl: 'modules/macros/views/create-macro.view.html'
		}).
		state('viewMacro', {
			url: '/macros/:macroId',
			templateUrl: 'modules/macros/views/view-macro.view.html'
		}).
		state('editMacro', {
			url: '/macros/:macroId/edit',
			templateUrl: 'modules/macros/views/edit-macro.view.html'
		});
	}
]);