/*eslint no-console: 0, no-unused-vars: 0, no-use-before-define: 0, no-redeclare: 0*/
sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("sap.openSAP.Multiply.Component", {

	metadata: {
		manifest: "json"
	},

	init: function(){
		sap.ui.core.UIComponent.prototype.init.apply(
			this, arguments);	
	},
	
	destroy: function() {
		UIComponent.prototype.destroy.apply(this, arguments);
	}

  });
});