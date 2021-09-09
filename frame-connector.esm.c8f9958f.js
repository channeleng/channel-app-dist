// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3tpIg":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "ee9b00ebc8f9958f";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ksFw2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FrameConnector", ()=>FrameConnector1
);
parcelHelpers.export(exports, "UserRejectedRequestError", ()=>UserRejectedRequestError1
);
var _abstractConnector = require("@web3-react/abstract-connector");
var _ethProvider = require("eth-provider");
var _ethProviderDefault = parcelHelpers.interopDefault(_ethProvider);
var _tinyInvariant = require("tiny-invariant");
var _tinyInvariantDefault = parcelHelpers.interopDefault(_tinyInvariant);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct1(Parent1, args1, Class1) {
        var a = [
            null
        ];
        a.push.apply(a, args1);
        var Constructor = Function.bind.apply(Parent1, a);
        var instance = new Constructor();
        if (Class1) _setPrototypeOf(instance, Class1.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper1(Class1) {
        if (Class1 === null || !_isNativeFunction(Class1)) return Class1;
        if (typeof Class1 !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class1)) return _cache.get(Class1);
            _cache.set(Class1, Wrapper);
        }
        function Wrapper() {
            return _construct(Class1, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class1.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class1);
    };
    return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
var UserRejectedRequestError1 = /*#__PURE__*/ function(_Error) {
    _inheritsLoose(UserRejectedRequestError2, _Error);
    function UserRejectedRequestError2() {
        var _this;
        _this = _Error.call(this) || this;
        _this.name = _this.constructor.name;
        _this.message = 'The user rejected the request.';
        return _this;
    }
    return UserRejectedRequestError2;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
var FrameConnector1 = /*#__PURE__*/ function(_AbstractConnector) {
    _inheritsLoose(FrameConnector2, _AbstractConnector);
    function FrameConnector2(kwargs) {
        var _this2;
        !(kwargs.supportedChainIds.length === 1) && _tinyInvariantDefault.default(false, 'This connector only supports 1 chainId at the moment.');
        _this2 = _AbstractConnector.call(this, kwargs) || this;
        _this2.handleNetworkChanged = _this2.handleNetworkChanged.bind(_assertThisInitialized(_this2));
        _this2.handleChainChanged = _this2.handleChainChanged.bind(_assertThisInitialized(_this2));
        _this2.handleAccountsChanged = _this2.handleAccountsChanged.bind(_assertThisInitialized(_this2));
        _this2.handleClose = _this2.handleClose.bind(_assertThisInitialized(_this2));
        return _this2;
    }
    var _proto = FrameConnector2.prototype;
    _proto.handleNetworkChanged = function handleNetworkChanged(networkId) {
        console.log("Handling 'networkChanged' event with payload", networkId);
        this.emitUpdate({
            provider: this.provider,
            chainId: networkId
        });
    };
    _proto.handleChainChanged = function handleChainChanged(chainId) {
        console.log("Handling 'chainChanged' event with payload", chainId);
        this.emitUpdate({
            chainId: chainId
        });
    };
    _proto.handleAccountsChanged = function handleAccountsChanged(accounts) {
        console.log("Handling 'accountsChanged' event with payload", accounts);
        this.emitUpdate({
            account: accounts.length === 0 ? null : accounts[0]
        });
    };
    _proto.handleClose = function handleClose(code, reason) {
        console.log("Handling 'close' event with payload", code, reason);
        this.emitDeactivate();
    };
    _proto.activate = function activate() {
        try {
            var _this4 = this;
            if (!_this4.provider) _this4.provider = _ethProviderDefault.default('frame');
            _this4.provider.on('networkChanged', _this4.handleNetworkChanged).on('chainChanged', _this4.handleChainChanged).on('accountsChanged', _this4.handleAccountsChanged).on('close', _this4.handleClose);
            return Promise.resolve(_this4.provider.enable().then(function(accounts) {
                return accounts[0];
            })["catch"](function(error) {
                if (error && error.code === 4001) throw new UserRejectedRequestError1();
                else throw error;
            })).then(function(account) {
                return {
                    provider: _this4.provider,
                    account: account
                };
            });
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getProvider = function getProvider() {
        try {
            var _this6 = this;
            return Promise.resolve(_this6.provider);
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getChainId = function getChainId() {
        try {
            var _this8 = this;
            return Promise.resolve(_this8.provider.send('eth_chainId'));
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getAccount = function getAccount() {
        try {
            var _this10 = this;
            return Promise.resolve(_this10.provider.send('eth_accounts').then(function(accounts) {
                return accounts[0];
            }));
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.deactivate = function deactivate() {
        this.provider.removeListener('networkChanged', this.handleNetworkChanged).removeListener('chainChanged', this.handleChainChanged).removeListener('accountsChanged', this.handleAccountsChanged).removeListener('close', this.handleClose);
    };
    return FrameConnector2;
}(_abstractConnector.AbstractConnector);

},{"@web3-react/abstract-connector":"8yS6W","eth-provider":"2Hnmx","tiny-invariant":"kiE0c","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8yS6W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractConnector", ()=>AbstractConnector1
);
var _events = require("events");
var _types = require("@web3-react/types");
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var AbstractConnector1 = /*#__PURE__*/ function(_EventEmitter) {
    _inheritsLoose(AbstractConnector2, _EventEmitter);
    function AbstractConnector2(_temp) {
        var _this;
        var _ref = _temp === void 0 ? {
        } : _temp, supportedChainIds = _ref.supportedChainIds;
        _this = _EventEmitter.call(this) || this;
        _this.supportedChainIds = supportedChainIds;
        return _this;
    }
    var _proto = AbstractConnector2.prototype;
    _proto.emitUpdate = function emitUpdate(update) {
        console.log("Emitting '" + _types.ConnectorEvent.Update + "' with payload", update);
        this.emit(_types.ConnectorEvent.Update, update);
    };
    _proto.emitError = function emitError(error) {
        console.log("Emitting '" + _types.ConnectorEvent.Error + "' with payload", error);
        this.emit(_types.ConnectorEvent.Error, error);
    };
    _proto.emitDeactivate = function emitDeactivate() {
        console.log("Emitting '" + _types.ConnectorEvent.Deactivate + "'");
        this.emit(_types.ConnectorEvent.Deactivate);
    };
    return AbstractConnector2;
}(_events.EventEmitter);

},{"events":"jVtdj","@web3-react/types":"ixNir","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jVtdj":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply1(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys1(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys2(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN1(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once1;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== 'function') throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if ((--this._eventsCount) === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if ((--this._eventsCount) === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once1(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') emitter.removeListener('error', errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === 'function') // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"2Hnmx":[function(require,module,exports) {
const resolve = require('./resolve');
const provider = require('./provider');
const presets = require('./presets');
const injected = {
    ethereum: typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' ? window.ethereum : null,
    web3: typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ? window.web3.currentProvider : null
};
const ws = typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined' ? window.WebSocket : null;
const XHR = typeof window !== 'undefined' && typeof window.XMLHttpRequest !== 'undefined' ? window.XMLHttpRequest : null;
if (injected.ethereum) injected.ethereum.__isProvider = true;
const connections = {
    injected: injected.ethereum || require('./connections/injected')(injected.web3),
    ipc: require('./connections/unavailable')('IPC connections are unavliable in the browser'),
    ws: require('./connections/ws')(ws),
    http: require('./connections/http')(XHR)
};
module.exports = (targets = [
    'injected',
    'frame'
], options = {
})=>provider(connections, resolve(targets, presets), options)
;

},{"./resolve":"24vI9","./provider":"hFcjl","./presets":"87H8e","./connections/injected":"kA9I9","./connections/unavailable":"6Fcxc","./connections/ws":"2s390","./connections/http":"kKaPc"}],"24vI9":[function(require,module,exports) {
const getProtocol = (location)=>{
    if (location === 'injected') return 'injected';
    if (location.endsWith('.ipc')) return 'ipc';
    if (location.startsWith('wss://') || location.startsWith('ws://')) return 'ws';
    if (location.startsWith('https://') || location.startsWith('http://')) return 'http';
    return '';
};
module.exports = (targets, presets)=>{
    return [].concat(...[].concat(targets).map((provider)=>{
        if (presets[provider]) return presets[provider].map((location)=>({
                type: provider,
                location,
                protocol: getProtocol(location)
            })
        );
        else return {
            type: 'custom',
            location: provider,
            protocol: getProtocol(provider)
        };
    })).filter((provider)=>{
        if (provider.protocol || provider.type === 'injected') return true;
        else {
            console.log('eth-provider | Invalid provider preset/location: "' + provider.location + '"');
            return false;
        }
    });
};

},{}],"hFcjl":[function(require,module,exports) {
const EventEmitter = require('events');
const EthereumProvider = require('ethereum-provider');
const ConnectionManager = require('../ConnectionManager');
const monitor = (provider)=>{
    function update(status) {
        provider.status = status;
        if (provider instanceof EventEmitter) provider.emit('status', status);
    }
    async function check() {
        if (provider.inSetup) return setTimeout(check, 1000);
        try {
            if (await provider.send('eth_syncing')) {
                update('syncing');
                setTimeout(()=>check()
                , 5000);
            } else update('connected');
        } catch (e) {
            update('disconnected');
        }
    }
    update('loading');
    check();
    provider.on('connect', ()=>check()
    );
    provider.on('close', ()=>update('disconnected')
    );
    return provider;
};
module.exports = (connections, targets, options)=>{
    // If window.ethereum and injected is a target in any priority, return ethereum provider
    if (connections.injected.__isProvider && targets.map((t)=>t.type
    ).indexOf('injected') > -1) {
        delete connections.injected.__isProvider;
        return monitor(connections.injected);
    }
    const provider = new EthereumProvider(new ConnectionManager(connections, targets, options));
    provider.setMaxListeners(128);
    return monitor(provider);
};

},{"events":"jVtdj","ethereum-provider":"kKTyD","../ConnectionManager":"jmtRb"}],"kKTyD":[function(require,module,exports) {
const EventEmitter = require('events');
class EthereumProvider extends EventEmitter {
    constructor(connection){
        super();
        this.connected = false;
        this.nextId = 0;
        this.promises = {
        };
        this.subscriptions = [];
        this.connection = connection;
        this.connection.on('connect', ()=>this.checkConnection()
        );
        this.connection.on('close', ()=>this.emit('close')
        );
        this.connection.on('payload', (payload)=>{
            const { id , method , error , result  } = payload;
            if (typeof id !== 'undefined') {
                if (this.promises[id]) {
                    payload.error ? this.promises[id].reject(error) : this.promises[id].resolve(result);
                    delete this.promises[id];
                }
            } else if (method && method.indexOf('_subscription') > -1) {
                this.emit(payload.params.subscription, payload.params.result);
                this.emit(method, payload.params) // Latest EIP-1193
                ;
                this.emit('data', payload) // Backwards Compatibility
                ;
            }
        });
        this.on('newListener', (event, listener)=>{
            if (event === 'networkChanged') {
                if (!this.attemptedNetworkSubscription && this.connected) this.startNetworkSubscription();
            } else if (event === 'accountsChanged') {
                if (!this.attemptedAccountsSubscription && this.connected) this.startAccountsSubscription();
            }
        });
    }
    async checkConnection() {
        try {
            this.emit('connect', await this._send('net_version'));
            this.connected = true;
            if (this.listenerCount('networkChanged') && !this.attemptedNetworkSubscription) this.startNetworkSubscription();
            if (this.listenerCount('accountsChanged') && !this.attemptedAccountsSubscription) this.startAccountsSubscription();
        } catch (e) {
            this.connected = false;
        }
    }
    async startNetworkSubscription() {
        this.attemptedNetworkSubscription = true;
        try {
            let networkChanged = await this.subscribe('eth_subscribe', 'networkChanged');
            this.on(networkChanged, (netId)=>this.emit('networkChanged', netId)
            );
        } catch (e) {
            console.warn('Unable to subscribe to networkChanged', e);
        }
    }
    async startAccountsSubscription() {
        this.attemptedAccountsSubscription = true;
        try {
            let accountsChanged = await this.subscribe('eth_subscribe', 'accountsChanged');
            this.on(accountsChanged, (accounts)=>this.emit('accountsChanged', accounts)
            );
        } catch (e) {
            console.warn('Unable to subscribe to accountsChanged', e);
        }
    }
    enable() {
        return new Promise((resolve, reject)=>{
            this._send('eth_accounts').then((accounts)=>{
                if (accounts.length > 0) {
                    this.accounts = accounts;
                    this.coinbase = accounts[0];
                    this.emit('enable');
                    resolve(accounts);
                } else {
                    const err = new Error('User Denied Full Provider');
                    err.code = 4001;
                    reject(err);
                }
            }).catch(reject);
        });
    }
    _send(method, params = []) {
        if (!method || typeof method !== 'string') return new Error('Method is not a valid string.');
        if (!(params instanceof Array)) return new Error('Params is not a valid array.');
        const payload = {
            jsonrpc: '2.0',
            id: this.nextId++,
            method,
            params
        };
        const promise = new Promise((resolve, reject)=>{
            this.promises[payload.id] = {
                resolve,
                reject
            };
        });
        this.connection.send(payload);
        return promise;
    }
    send(...args) {
        return this._send(...args);
    }
    _sendBatch(requests) {
        return Promise.all(requests.map((payload)=>this._send(payload.method, payload.params)
        ));
    }
    subscribe(type, method, params = []) {
        return this._send(type, [
            method,
            ...params
        ]).then((id)=>{
            this.subscriptions.push(id);
            return id;
        });
    }
    unsubscribe(type, id) {
        return this._send(type, [
            id
        ]).then((success)=>{
            if (success) {
                this.subscriptions = this.subscriptions.filter((_id)=>_id !== id
                ) // Remove subscription
                ;
                this.removeAllListeners(id) // Remove listeners
                ;
                return success;
            }
        });
    }
    sendAsync(payload, cb) {
        if (!cb || typeof cb !== 'function') return cb(new Error('Invalid or undefined callback provided to sendAsync'));
        if (!payload) return cb(new Error('Invalid Payload'));
        // sendAsync can be called with an array for batch requests used by web3.js 0.x
        // this is not part of EIP-1193's backwards compatibility but we still want to support it
        if (payload instanceof Array) return this.sendAsyncBatch(payload, cb);
        else return this._send(payload.method, payload.params).then((result)=>{
            cb(null, {
                id: payload.id,
                jsonrpc: payload.jsonrpc,
                result
            });
        }).catch((err)=>{
            cb(err);
        });
    }
    sendAsyncBatch(payload, cb) {
        return this._sendBatch(payload).then((results)=>{
            let result = results.map((entry, index)=>{
                return {
                    id: payload[index].id,
                    jsonrpc: payload[index].jsonrpc,
                    result: entry
                };
            });
            cb(null, result);
        }).catch((err)=>{
            cb(err);
        });
    }
    isConnected() {
        return this.connected;
    }
    close() {
        this.connection.close();
        this.connected = false;
        let error = new Error(`Provider closed, subscription lost, please subscribe again.`);
        this.subscriptions.forEach((id)=>this.emit(id, error)
        ) // Send Error objects to any open subscriptions
        ;
        this.subscriptions = [] // Clear subscriptions
        ;
    }
}
module.exports = EthereumProvider;

},{"events":"jVtdj"}],"jmtRb":[function(require,module,exports) {
const EventEmitter = require('events');
const dev = true;
class ConnectionManager extends EventEmitter {
    constructor(connections, targets, options){
        super();
        this.targets = targets;
        this.connections = connections;
        this.connected = false;
        this.status = 'loading';
        this.interval = options.interval || 5000;
        this.name = options.name || 'default';
        this.inSetup = true;
        this.connect();
    }
    connect(index = 0) {
        if (dev && index === 0) console.log(`\n\n\n\nA connection cycle started for provider with name: ${this.name}`);
        if (this.connection && this.connection.status === 'connected' && index >= this.connection.index) {
            if (dev) console.log('Stopping connection cycle becasuse we\'re already connected to a higher priority provider');
        } else if (this.targets.length === 0) {
            if (dev) console.log('No valid targets supplied');
        } else {
            const { protocol , location  } = this.targets[index];
            this.connection = this.connections[protocol](location);
            this.connection.on('error', (err)=>{
                if (!this.connected) return this.connectionError(index, err);
                if (this.listenerCount('error')) return this.emit('error', err);
                console.warn('eth-provider - Uncaught connection error: ' + err.message);
            });
            this.connection.on('close', (summary)=>{
                this.connected = false;
                this.emit('close');
                if (!this.closing) this.refresh();
            });
            this.connection.on('connect', ()=>{
                this.connection.target = this.targets[index];
                this.connection.index = index;
                this.targets[index].status = this.connection.status;
                this.connected = true;
                this.inSetup = false;
                if (dev) console.log('Successfully connected to: ' + this.targets[index].location);
                this.emit('connect');
            });
            this.connection.on('data', (data)=>this.emit('data', data)
            );
            this.connection.on('payload', (payload)=>this.emit('payload', payload)
            );
        }
    }
    refresh(interval = this.interval) {
        if (dev) console.log(`Reconnect queued for ${(interval / 1000).toFixed(2)}s in the future`);
        clearTimeout(this.connectTimer);
        this.connectTimer = setTimeout(()=>this.connect()
        , interval);
    }
    connectionError(index, err) {
        this.targets[index].status = err;
        if (this.targets.length - 1 === index) {
            this.inSetup = false;
            if (dev) console.warn('eth-provider unable to connect to any targets, view connection cycle summary: ', this.targets);
            this.refresh();
        } else this.connect(++index);
    }
    close() {
        this.closing = true;
        if (this.connection) this.connection.close() // Let event bubble from here
        ;
        else this.emit('close');
        clearTimeout(this.connectTimer);
    }
    error(payload, message, code = -1) {
        this.emit('payload', {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            error: {
                message,
                code
            }
        });
    }
    send(payload) {
        if (this.inSetup) setTimeout(()=>this.send(payload)
        , 100);
        else if (this.connection.closed) this.error(payload, 'Not connected');
        else this.connection.send(payload);
    }
}
module.exports = ConnectionManager;

},{"events":"jVtdj"}],"87H8e":[function(require,module,exports) {
module.exports = {
    injected: [
        'injected'
    ],
    frame: [
        'ws://127.0.0.1:1248',
        'http://127.0.0.1:1248'
    ],
    direct: [
        'ws://127.0.0.1:8546',
        'http://127.0.0.1:8545'
    ],
    infura: [
        'wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b',
        'https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b'
    ],
    infuraRopsten: [
        'wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b',
        'https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b'
    ],
    infuraRinkeby: [
        'wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b',
        'https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b'
    ],
    infuraKovan: [
        'wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b',
        'https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b'
    ]
};

},{}],"kA9I9":[function(require,module,exports) {
const EventEmitter = require('events');
class InjectedConnection extends EventEmitter {
    constructor(_injected, options){
        super();
        if (_injected) setTimeout(()=>this.emit('error', new Error('Injected web3 provider is not currently supported'))
        , 0);
        else setTimeout(()=>this.emit('error', new Error('No injected provider found'))
        , 0);
    }
}
module.exports = (injected)=>(options1)=>new InjectedConnection(injected, options1)
;

},{"events":"jVtdj"}],"6Fcxc":[function(require,module,exports) {
const EventEmitter = require('events');
class UnavailableConnection extends EventEmitter {
    constructor(message){
        super();
        setTimeout(()=>this.emit('error', new Error(message))
        , 0);
    }
}
module.exports = (message1)=>()=>new UnavailableConnection(message1)
;

},{"events":"jVtdj"}],"2s390":[function(require,module,exports) {
const EventEmitter = require('events');
const parse = require('../parse');
const dev = true;
let WebSocket1;
class WebSocketConnection extends EventEmitter {
    constructor(_WebSocket, url1, options1){
        super();
        WebSocket1 = _WebSocket;
        setTimeout(()=>this.create(url1, options1)
        , 0);
    }
    create(url, options) {
        if (!WebSocket1) this.emit('error', new Error('No WebSocket transport available'));
        try {
            this.socket = new WebSocket1(url);
        } catch (e) {
            return this.emit('error', e);
        }
        this.socket.addEventListener('error', (err)=>this.emit('error', err)
        );
        this.socket.addEventListener('open', ()=>{
            this.emit('connect');
            this.socket.addEventListener('message', (message)=>{
                const data = typeof message.data === 'string' ? message.data : '';
                parse(data, (err, payloads)=>{
                    if (err) return; //
                    payloads.forEach((load)=>{
                        if (Array.isArray(load)) load.forEach((payload)=>this.emit('payload', payload)
                        );
                        else this.emit('payload', load);
                    });
                });
            });
            this.socket.addEventListener('close', ()=>this.onClose()
            );
        });
    }
    onClose() {
        this.socket = null;
        this.closed = true;
        if (dev) console.log('Closing WebSocket connection');
        this.emit('close');
        this.removeAllListeners();
    }
    close() {
        if (this.socket) this.socket.close();
        else this.onClose();
    }
    error(payload, message, code = -1) {
        this.emit('payload', {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            error: {
                message,
                code
            }
        });
    }
    send(payload) {
        if (this.socket && this.socket.readyState === this.socket.CONNECTING) setTimeout((_)=>this.send(payload)
        , 10);
        else if (!this.socket || this.socket.readyState > 1) {
            this.connected = false;
            this.error(payload, 'Not connected');
        } else this.socket.send(JSON.stringify(payload));
    }
}
module.exports = (WebSocket2)=>(url2, cb)=>new WebSocketConnection(WebSocket2, url2, cb)
;

},{"events":"jVtdj","../parse":"12Q75"}],"12Q75":[function(require,module,exports) {
let last, timeout;
module.exports = (res, cb)=>{
    const values = [];
    res.replace(/\}[\n\r]?\{/g, '}|--|{') // }{
    .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
    .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
    .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
    .split('|--|').forEach((data)=>{
        if (last) data = last + data // prepend the last chunk
        ;
        let result;
        try {
            result = JSON.parse(data);
        } catch (e) {
            last = data;
            clearTimeout(timeout) // restart timeout
            ;
            timeout = setTimeout(()=>cb(new Error('Parse response timeout'))
            , 15000);
            return;
        }
        clearTimeout(timeout);
        last = null;
        if (result) values.push(result);
    });
    cb(null, values);
};

},{}],"kKaPc":[function(require,module,exports) {
const EventEmitter = require('events');
const uuid = require('uuid/v4');
const dev = true;
let XHR;
class HTTPConnection extends EventEmitter {
    constructor(_XHR, url, options){
        super();
        XHR = _XHR;
        this.connected = false;
        this.subscriptions = false;
        this.status = 'loading';
        this.url = url;
        this.pollId = uuid();
        setTimeout(()=>this.create()
        , 0);
    }
    create() {
        if (!XHR) return this.emit('error', new Error('No HTTP transport available'));
        this.on('error', ()=>{
            if (this.connected) this.close();
        });
        this.init();
    }
    init() {
        this.send({
            jsonrpc: '2.0',
            method: 'eth_syncing',
            params: [],
            id: 1
        }, (err, response)=>{
            if (err) return this.emit('error', err);
            this.send({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_pollSubscriptions',
                params: [
                    this.pollId,
                    'immediate'
                ]
            }, (err1, response1)=>{
                if (!err1) {
                    this.subscriptions = true;
                    this.pollSubscriptions();
                }
                this.connected = true;
                this.emit('connect');
            });
        });
    }
    pollSubscriptions() {
        this.send({
            jsonrpc: '2.0',
            id: 1,
            method: 'eth_pollSubscriptions',
            params: [
                this.pollId
            ]
        }, (err, result)=>{
            if (err) {
                this.subscriptionTimeout = setTimeout(()=>this.pollSubscriptions()
                , 10000);
                return this.emit('error', err);
            } else {
                if (!this.closed) this.subscriptionTimeout = this.pollSubscriptions();
                if (result) result.map((p)=>{
                    let parse;
                    try {
                        parse = JSON.parse(p);
                    } catch (e) {
                        parse = false;
                    }
                    return parse;
                }).filter((n)=>n
                ).forEach((p)=>this.emit('payload', p)
                );
            }
        });
    }
    close() {
        if (dev) console.log('Closing HTTP connection');
        this.closed = true;
        this.emit('close');
        clearTimeout(this.subscriptionTimeout);
        this.removeAllListeners();
    }
    filterStatus(res) {
        if (res.status >= 200 && res.status < 300) return res;
        const error = new Error(res.statusText);
        error.res = res;
        throw error.message;
    }
    error(payload, message, code = -1) {
        this.emit('payload', {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            error: {
                message,
                code
            }
        });
    }
    send(payload, internal) {
        if (this.closed) return this.error(payload, 'Not connected');
        if (payload.method === 'eth_subscribe') {
            if (this.subscriptions) payload.pollId = this.pollId;
            else return this.error(payload, 'Subscriptions are not supported by this HTTP endpoint');
        }
        const xhr = new XHR();
        let responded = false;
        const res = (err, result)=>{
            if (!responded) {
                xhr.abort();
                responded = true;
                if (internal) internal(err, result);
                else {
                    const { id , jsonrpc  } = payload;
                    const load = err ? {
                        id,
                        jsonrpc,
                        error: {
                            message: err.message,
                            code: err.code
                        }
                    } : {
                        id,
                        jsonrpc,
                        result
                    };
                    this.emit('payload', load);
                }
            }
        };
        xhr.open('POST', this.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.timeout = 60000;
        xhr.onerror = res;
        xhr.ontimeout = res;
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4) try {
                const response = JSON.parse(xhr.responseText);
                res(response.error, response.result);
            } catch (e) {
                res(e);
            }
        };
        xhr.send(JSON.stringify(payload));
    }
}
module.exports = (XHR1)=>(url1, options1)=>new HTTPConnection(XHR1, url1, options1)
;

},{"events":"jVtdj","uuid/v4":"27jYk"}],"27jYk":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');
function v4(options, buf, offset) {
    var i = buf && offset || 0;
    if (typeof options == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
    }
    options = options || {
    };
    var rnds = options.random || (options.rng || rng)();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    // Copy bytes to buffer, if provided
    if (buf) for(var ii = 0; ii < 16; ++ii)buf[i + ii] = rnds[ii];
    return buf || bytesToUuid(rnds);
}
module.exports = v4;

},{"./lib/rng":"9kT2H","./lib/bytesToUuid":"kcgOP"}],"9kT2H":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
    module.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
    };
} else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);
    module.exports = function mathRNG() {
        for(var i = 0, r; i < 16; i++){
            if ((i & 3) === 0) r = Math.random() * 4294967296;
            rnds[i] = r >>> ((i & 3) << 3) & 255;
        }
        return rnds;
    };
}

},{}],"kcgOP":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex[i] = (i + 256).toString(16).substr(1);
function bytesToUuid(buf, offset) {
    var i1 = offset || 0;
    var bth = byteToHex;
    // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
    return [
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        '-',
        bth[buf[i1++]],
        bth[buf[i1++]],
        '-',
        bth[buf[i1++]],
        bth[buf[i1++]],
        '-',
        bth[buf[i1++]],
        bth[buf[i1++]],
        '-',
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]]
    ].join('');
}
module.exports = bytesToUuid;

},{}]},["3tpIg"], null, "parcelRequire81fb")

//# sourceMappingURL=frame-connector.esm.c8f9958f.js.map
