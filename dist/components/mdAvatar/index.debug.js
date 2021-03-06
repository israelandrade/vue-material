(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;
	
	var _mdAvatar = __webpack_require__(2);
	
	var _mdAvatar2 = _interopRequireDefault(_mdAvatar);
	
	var _mdAvatar3 = __webpack_require__(6);
	
	var _mdAvatar4 = _interopRequireDefault(_mdAvatar3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function install(Vue) {
	  Vue.component('md-avatar', Vue.extend(_mdAvatar2.default));
	
	  Vue.material.styles.push(_mdAvatar4.default);
	}
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(3)
	
	/* template */
	var __vue_template__ = __webpack_require__(5)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mrufino/Projects/personal/github/vue-material/src/components/mdAvatar/mdAvatar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-06f3a383", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-06f3a383", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdAvatar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "md-avatar"
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-06f3a383", module.exports)
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ".THEME_NAME .md-avatar.md-primary.md-avatar-icon, .THEME_NAME.md-avatar.md-primary.md-avatar-icon {\n  background-color: PRIMARY-COLOR; }\n  .THEME_NAME .md-avatar.md-primary.md-avatar-icon .md-icon, .THEME_NAME.md-avatar.md-primary.md-avatar-icon .md-icon {\n    color: PRIMARY-CONTRAST-0.99999; }\n\n.THEME_NAME .md-avatar.md-accent.md-avatar-icon, .THEME_NAME.md-avatar.md-accent.md-avatar-icon {\n  background-color: ACCENT-COLOR; }\n  .THEME_NAME .md-avatar.md-accent.md-avatar-icon .md-icon, .THEME_NAME.md-avatar.md-accent.md-avatar-icon .md-icon {\n    color: ACCENT-CONTRAST-0.99999; }\n\n.THEME_NAME .md-avatar.md-warn.md-avatar-icon, .THEME_NAME.md-avatar.md-warn.md-avatar-icon {\n  background-color: WARN-COLOR; }\n  .THEME_NAME .md-avatar.md-warn.md-avatar-icon .md-icon, .THEME_NAME.md-avatar.md-warn.md-avatar-icon .md-icon {\n    color: WARN-CONTRAST-0.99999; }\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.debug.js.map