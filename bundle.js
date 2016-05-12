/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var assert = chai.assert;

	describe('Compare m1 and m2 by m1.x === m2.x && m1.id === m2.id', function () {
	  describe('Click a test to see the code:', function () {
	    it('\n      Compare value and id of O.m and O.m.bnd(m.ret) \n      ', function () {
	      assert.equal(O.m.x, O.m.bnd(m.ret).x);
	      assert.equal(O.m.id, O.m.bnd(m.ret).id);
	    });
	    it('\n      Compare ret(5) and ret(ret(5).x) \n      ', function () {
	      assert.equal(ret(5).x, ret(ret(5).x).x);
	      assert.equal(ret(5).id, ret(ret(5).x).id);
	    });
	    it('\n      Compare value and id of ret(0).bnd(add, 3).bnd(cube) and ret(0).bnd(v => add(v, 3)).bnd(cube)\n      ', function () {
	      assert.equal(ret(0).bnd(add, 3).bnd(cube).x, ret(0).bnd(function (v) {
	        return add(v, 3).bnd(cube);
	      }).x);
	      assert.equal(ret(0).bnd(add, 3).bnd(cube).id, ret(0).bnd(function (v) {
	        return add(v, 3).bnd(cube);
	      }).id);
	    });
	  });
	});

/***/ }
/******/ ]);