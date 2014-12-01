'use strict';

// Configuring the Articles module
angular.module('macros').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Macros', 'macros', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'macros', 'List Macros', 'articles');
		Menus.addSubMenuItem('topbar', 'macros', 'New Macro', 'articles/create');
	}
]);
