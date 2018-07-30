sap.ui.define([
/*eslint linebreak-style: ["error", "windows"]*/	
     "sap/ui/core/mvc/Controller",
     "sap/ui/core/routing/History"
], function(Controller, History) {
     "use strict";

     return Controller.extend("test_sapui5.Router", {

          getRouter: function() { // Esta es la función getRouter
                return sap.ui.core.UIComponent.getRouterFor(this); 

          },

          onNavBack: function (iJumpsNumber) {
                var oHistory, sPreviousHash;
                oHistory = History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();
                iJumpsNumber = iJumpsNumber ? iJumpsNumber : -1;
          
                if (sPreviousHash) { 
                     window.history.go(iJumpsNumber);
                } else {
                     this.getRouter().navTo("View1", {}, true /*no history*/);
                }
          }
     });
});