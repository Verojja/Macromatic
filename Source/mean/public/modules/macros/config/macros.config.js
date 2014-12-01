'use strict';

// Configuring the Articles module
angular.module('macros').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Macros', 'macros', 'dropdown', '/macros(/create)?');
		Menus.addSubMenuItem('topbar', 'macros', 'List Macros', 'macros');
		Menus.addSubMenuItem('topbar', 'macros', 'New Macro', 'macros/create');
	}
]);