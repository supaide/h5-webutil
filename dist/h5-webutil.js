/*!
 * h5-webutil v1.0.5 (https://github.com/supaide/h5-webutil/README.md)
 * Copyright 2018, cyij
 * MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["h5-webutil"] = factory();
	else
		root["h5-webutil"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var encodeQuery = function encodeQuery(pairs) {
  if (!pairs) {
    return '';
  }
  var pairs0 = [];
  for (var k in pairs) {
    pairs0.push(k + '=' + encodeURIComponent(pairs[k]));
  }
  return pairs0.join('&');
};

var decodeQuery = function decodeQuery(query) {
  var pairs = {};
  var paths = [];
  if (!query) {
    return [paths, pairs];
  }
  var hashPos = query.indexOf('#');
  if (hashPos > -1) {
    query = query.substr(0, hashPos);
  }
  var pathEndPos = query.indexOf('?');
  paths = query;
  if (pathEndPos > -1) {
    paths = query.substr(0, pathEndPos);
    query = query.substr(pathEndPos + 1);
  } else {
    query = '';
  }
  paths = paths.split('/').filter(function (path) {
    return path.length > 0;
  });

  var pairs0 = query.split("&");
  for (var i = 0; i < pairs0.length; i++) {
    var pair = pairs0[i].split('=');
    if (pair.length == 2) {
      pairs[pair[0]] = decodeURIComponent(pair[1]);
    }
  }
  return [paths, pairs];
};

/* harmony default export */ __webpack_exports__["a"] = ({
  encodeQuery: encodeQuery,
  decodeQuery: decodeQuery
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_string__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_url__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_validate__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_event__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return __WEBPACK_IMPORTED_MODULE_2__lib_http__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return __WEBPACK_IMPORTED_MODULE_3__lib_url__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_4__lib_util__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validate", function() { return __WEBPACK_IMPORTED_MODULE_5__lib_validate__["a"]; });









/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

String.prototype.truncate = function (len, padding) {
  var str = this;
  if (!padding) {
    padding = '...';
  }
  if (len < padding.length) {
    return '';
  }
  len -= padding.length;
  var c = void 0,
      l = 1,
      len0 = 0,
      stopInd = -1,
      leftLen = 0;
  for (var i = 0; i < str.length; i++) {
    c = str[i].charCodeAt();
    if (c <= 127) {
      l = 1;
    } else {
      l = 2;
    }
    len0 += l;
    if (len0 > len) {
      leftLen += l;
    } else {
      stopInd = i;
    }
  }
  if (stopInd < 0) {
    return '';
  }
  if (leftLen <= padding.length) {
    return str;
  } else {
    return str.substr(0, stopInd + 1) + padding;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (String);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var listener = {};
var doEmit = function doEmit(type, data) {
  if (!listener[type]) {
    return;
  }
  for (var i = 0; i < listener[type].length; i++) {
    listener[type][i].apply({}, data);
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  on: function on(type, callback, target) {
    if (!listener[type]) {
      listener[type] = [];
    }
    if (target) {
      listener[type].push(function () {
        for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
          data[_key] = arguments[_key];
        }

        callback.apply(target, data);
      });
    } else {
      listener[type].push(callback);
    }
  },
  off: function off(type, callback) {
    if (!listener[type]) {
      return;
    }
    if (callback) {
      for (var i = 0; i < listener[type].length; i++) {
        if (listener[type][i] === callback) {
          listener[type].splice(i, 1);
          return;
        }
      }
    } else {
      delete listener[type];
    }
  },
  emit: function emit(type) {
    for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      data[_key2 - 1] = arguments[_key2];
    }

    doEmit(type, data);
  },
  asyncEmit: function asyncEmit(type) {
    for (var _len3 = arguments.length, data = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      data[_key3 - 1] = arguments[_key3];
    }

    setTimeout(function () {
      doEmit(type, data);
    }, 0);
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var config = {};
var requestQueue = {};

var checkStatus = function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

var processBlob = function processBlob(type, filename, res, success, error) {
  res.blob().then(function (blob) {
    var url = window.URL.createObjectURL(blob);
    if (type === 'download') {
      var a = document.createElement('a');
      filename = filename || res.headers.get('Content-Disposition');
      a.href = url;
      a.download = filename;
      a.click();
    }
    success && success(url);
    window.URL.revokeObjectURL(url);
  }).catch(function (msg) {
    error && error(-1, msg);
  });
};

var http = function http(url, params, success, error, options) {
  if (typeof params === 'function') {
    options = error;
    error = success;
    success = params;
    params = null;
  }
  if ((typeof success === 'undefined' ? 'undefined' : _typeof(success)) === 'object') {
    options = success;
    success = null;
    error = null;
  }
  if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object') {
    options = error;
    error = null;
  }
  options = options || {};
  if (config.urlPrefix && url.indexOf('http') !== 0) {
    url = config.urlPrefix + url;
  }
  var url0 = url;
  if (!options.ignoreBlock) {
    if (requestQueue[url0]) {
      return;
    }
    requestQueue[url0] = 1;
  }
  var method = options.method ? options.method.toUpperCase() : 'POST';
  var credentials = options.credentials ? options.credentials : 'include';
  var dataType = options.dataType ? options.dataType : 'json';
  var preProcess = options.preProcess !== undefined ? options.preProcess : config.preProcess;
  var blob = options.blob ? options.blob : false;
  var filename = options.filename ? options.filename : null;
  var jsonParam = options.jsonParam ? options.jsonParam : method == 'POST' ? false : true;
  var paramsInBody = method == 'POST' || method == 'PUT' || method == 'PATCH';

  params = params || {};
  if (!options.ignoreDefaultParams && config.defaultParams) {
    var defaultData = config.defaultParams() || {};
    for (var k in defaultData) {
      params[k] = defaultData[k];
    }
  }

  var postData = null;
  var getData = [];
  if (paramsInBody) {
    postData = new FormData();
  }
  for (var _k in params) {
    if (Array.isArray(params[_k])) {
      var pairs = params[_k];
      for (var i = 0; i < pairs.length; i++) {
        if (postData) {
          postData.append(_k, pairs[i]);
        }
        getData.push(_k + '[]=' + encodeURIComponent(pairs[i]));
      }
    } else {
      if (postData) {
        postData.append(_k, params[_k]);
      }
      getData.push(_k + '=' + encodeURIComponent(params[_k]));
    }
  }
  var option0 = {
    method: method
  };
  if (!paramsInBody) {
    if (url.indexOf('?') > -1) {
      url += '&' + getData.join('&');
    } else {
      url += '?' + getData.join('&');
    }
  } else {
    if (!jsonParam) {
      option0.body = postData;
    } else {
      option0.body = JSON.stringify(params);
      option0.headers = {
        'Content-Type': 'application/json'
      };
    }
    option0.credentials = credentials;
  }

  var p = fetch(url, option0).then(checkStatus);
  if (blob) {
    p = p.then(function (response) {
      delete requestQueue[url0];
      processBlob(blob, filename, response, success, error);
    });
  } else {
    if (dataType === 'text') {
      p = p.then(function (response) {
        return response.text();
      });
    } else if (dataType === 'json') {
      p = p.then(function (response) {
        return response.json();
      });
    }
    p = p.then(function (data) {
      delete requestQueue[url0];
      if (typeof preProcess === 'function') {
        var ret = preProcess(data, dataType, success, error);
        if (ret === null) {
          return;
        }
        data = ret;
      }
      success && success.apply({}, [].concat(data));
    });
  }
  p.catch(function (msg) {
    delete requestQueue[url0];
    error && error(-1, msg);
  });
};

http.config = function (options) {
  config.preProcess = options.preProcess ? options.preProcess : null;
  config.defaultParams = options.defaultParams ? options.defaultParams : null;
  config.urlPrefix = options.urlPrefix ? options.urlPrefix : null;
};

var setMethod = function setMethod(args0, type) {
  var args = [];
  if (args0.length > 0) {
    for (var i = 0; i < args0.length; i++) {
      args.push(args0[i]);
    }
  }
  var lastArg = args.slice(-1)[0];
  if ((typeof lastArg === 'undefined' ? 'undefined' : _typeof(lastArg)) === 'object') {
    lastArg.method = type;
  } else {
    args.push({ method: type });
  }
  return args;
};

http.get = function () {
  http.apply(this, setMethod(arguments, 'get'));
};
http.post = function () {
  http.apply(this, setMethod(arguments, 'post'));
};
http.put = function () {
  http.apply(this, setMethod(arguments, 'put'));
};
http.patch = function () {
  http.apply(this, setMethod(arguments, 'patch'));
};
http.delete = function () {
  http.apply(this, setMethod(arguments, 'delete'));
};
http.head = function () {
  http.apply(this, setMethod(arguments, 'head'));
};
http.options = function () {
  http.apply(this, setMethod(arguments, 'options'));
};

/* harmony default export */ __webpack_exports__["a"] = (http);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _clone = function _clone(parent, obj, exclude) {
  var isArray = false;
  if (Array.isArray(parent)) {
    isArray = true;
  }
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (Array.isArray(exclude) && exclude.indexOf(k) >= 0 || typeof exclude === 'string' && k.indexOf(exclude) === 0) {
        continue;
      }
      if (_typeof(obj[k]) !== 'object' || obj[k] === null || obj[k] === undefined) {
        if (isArray) {
          parent.push(obj[k]);
        } else {
          parent[k] = obj[k];
        }
      } else {
        if (Array.isArray(obj[k])) {
          if (isArray) {
            parent.push([]);
          } else {
            parent[k] = [];
          }
        } else {
          if (isArray) {
            parent.push({});
          } else {
            parent[k] = {};
          }
        }
        if (isArray) {
          _clone(parent[parent.length - 1], obj[k]);
        } else {
          _clone(parent[k], obj[k]);
        }
      }
    }
  }
};

var clone = function clone(obj, exclude) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null || obj === undefined) {
    return obj;
  }
  var parent = void 0;
  if (Array.isArray(obj)) {
    parent = [];
  } else {
    parent = {};
  }
  _clone(parent, obj, exclude);
  return parent;
};

var filterEmpty = function filterEmpty(obj, ignoreEmptyStr) {
  var data = {};
  Object.keys(obj).forEach(function (key) {
    var val = obj[key];
    if (val !== null && val !== undefined && (ignoreEmptyStr || String(val).length > 0)) {
      data[key] = val;
    }
  });
  return data;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  filterEmpty: filterEmpty,
  clone: clone
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_common_js__ = __webpack_require__(7);


var validators = {
  email: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["b" /* email */], mobile: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["h" /* mobile */], idCard: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["d" /* idCard */], length: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["e" /* length */], equal: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["c" /* equal */], min: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["g" /* min */], max: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["f" /* max */], between: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["a" /* between */], required: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["j" /* required */], passwd: __WEBPACK_IMPORTED_MODULE_0__validator_common_js__["i" /* passwd */]
};

var validate = function validate(validator, value, params, ignoreEmoty) {
  if (typeof validators[validator] !== 'function') {
    return false;
  }
  if (ignoreEmoty) {
    if (value === null || value === undefined) {
      return true;
    }
    if (typeof value === 'string' && value.length < 1) {
      return true;
    }
    return Object.keys(value).length > 0;
  }
  return validators[validator].apply({}, [value, params]);
};

validate.register = function (name, func) {
  validators[name] = func;
};

/* harmony default export */ __webpack_exports__["a"] = (validate);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return idCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return passwd; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var checkVal = function checkVal(val, min, max) {
  if (val === null || val === undefined) {
    return false;
  }
  if (typeof min === 'undefined') {
    min = 0;
  }
  if (typeof max === 'undefined') {
    return val >= min;
  } else {
    return val >= min && val <= max;
  }
};

var email = function email(val, params) {
  if (!val) {
    return false;
  }
  return (/^([a-zA-Z0-9]+[_|\_|\.-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/.test(val)
  );
};

var mobile = function mobile(val, params) {
  if (!val) {
    return false;
  }
  return (/^1[3|4|5|7|8][0-9]\d{8}$/.test(val)
  );
};

var idCard = function idCard(val, params) {
  if (!val) {
    return false;
  }
  return (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val)
  );
};

var length = function length(val, params) {
  var min = void 0,
      max = void 0;
  if (params && params.length > 0) {
    min = params[0];
  }
  if (params && params.length > 1) {
    max = params[1];
  }
  return checkVal(val, min, max);
};

var equal = function equal(val, params) {
  if (!params || params.length < 1) {
    return false;
  }
  return checkVal(val, params[0], params[0]);
};

var min = function min(val, params) {
  if (!params || params.length < 1) {
    return false;
  }
  return checkVal(val, params[0]);
};
var max = function max(val, params) {
  if (!params || params.length < 1) {
    return false;
  }
  return checkVal(val, undefined, params[0]);
};

var between = function between(val, params) {
  if (!params || params.length != 2) {
    return false;
  }
  return checkVal(val, params[0], params[1]);
};

var required = function required(val, params) {
  if (val === null || val === undefined) {
    return false;
  }
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
    return checkVal(('' + val).length, 1);
  } else {
    return Object.keys(val).length > 0;
  }
};

var passwd = function passwd(val, params) {
  val = (val + '').trim();
  var minLen = 8,
      maxLen = 20;
  if (params) {
    if (params.length > 0) {
      minLen = params[0] - 0;
    }
    if (params.length > 1) {
      maxLen = params[1] - 0;
    }
  }
  if (minLen < 1) {
    minLen = 1;
  }
  var len = val.length;
  if (len < minLen || len > maxLen) {
    return false;
  }
  var lowercase = val.toLowerCase();
  if (lowercase == val) {
    return false;
  }
  if (val.match(/\d/)) {
    return true;
  }
  return false;
};



/***/ })
/******/ ]);
});