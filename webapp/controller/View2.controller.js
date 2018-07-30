sap.ui.define([
/*eslint linebreak-style: ["error", "windows"]*/		
	"test_sapui5/Router"
], function(Router) {
	"use strict";

	return Router.extend("test_sapui5.controller.View2", {

		onInit: function() {
			this.initMap();
		},
		
		initMap: function() {
			var oGeoMap = this.getView().byId("GeoMap"); 
			var oMapConfig = {
				"MapProvider": [{
					"name": "GMAP",
					"Source": [{
						"id": "s1",
						"url": "https://mt.google.com/vt/x={X}&y={Y}&z={LOD}"
					}]
				}],
				"MapLayerStacks": [{
					"name": "DEFAULT",
					"MapLayer": {
						"name": "layer1",
						"refMapProvider": "GMAP",
						"opacity": "1",
						"colBkgnd": "RGB(255,255,255)"
					}
				}]
			};

			oGeoMap.setMapConfiguration(oMapConfig);
			oGeoMap.setRefMapLayerStack("DEFAULT");
			oGeoMap.setInitialPosition("-4.805695; 37.910304");
			oGeoMap.setInitialZoom(15);

		},
		
		
		onpress1: function() {
			this.getRouter().navTo("View1"); //Navega del getRouter
		},
		onpress2: function() {
			this.getRouter().navTo("View2");
		},
		onpress3: function() {
			this.getRouter().navTo("View3");

		}

	});

});