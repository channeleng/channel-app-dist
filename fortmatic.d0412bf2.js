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
})({"iFggJ":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "126a5827d0412bf2";
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

},{}],"dKTjs":[function(require,module,exports) {
module.exports = (function(e) {
    var t = {
    };
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {
            }
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }
    return r.m = e, r.c = t, r.d = function(e1, t1, n) {
        r.o(e1, t1) || Object.defineProperty(e1, t1, {
            enumerable: !0,
            get: n
        });
    }, r.r = function(e1) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e1, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e1, "__esModule", {
            value: !0
        });
    }, r.t = function(e1, t1) {
        if (1 & t1 && (e1 = r(e1)), 8 & t1) return e1;
        if (4 & t1 && "object" == typeof e1 && e1 && e1.__esModule) return e1;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e1
        }), 2 & t1 && "string" != typeof e1) for(var o in e1)r.d(n, o, (function(t2) {
            return e1[t2];
        }).bind(null, o));
        return n;
    }, r.n = function(e1) {
        var t1 = e1 && e1.__esModule ? function() {
            return e1.default;
        } : function() {
            return e1;
        };
        return r.d(t1, "a", t1), t1;
    }, r.o = function(e1, t1) {
        return Object.prototype.hasOwnProperty.call(e1, t1);
    }, r.p = "", r(r.s = 3);
})([
    function(e, t) {
        e.exports = function(e1) {
            return e1 && e1.__esModule ? e1 : {
                default: e1
            };
        };
    },
    function(e, t) {
        e.exports = function(e1, t1) {
            if (!(e1 instanceof t1)) throw new TypeError("Cannot call a class as a function");
        };
    },
    function(e, t, r) {
        "use strict";
        function n() {
            return Math.floor(90000 * Math.random()) + 10000;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sendAsyncWrapper = function(e1, t1) {
            var r1 = this;
            return new Promise(function(o, a) {
                r1.sendAsync({
                    jsonrpc: "2.0",
                    id: n(),
                    method: e1,
                    params: t1 || []
                }, function(e2, t2) {
                    e2 ? a(e2) : o(t2.result);
                });
            });
        }, t.sendFortmaticAsyncWrapper = function(e1) {
            var t1 = this;
            return new Promise(function(r1, n1) {
                t1.getProvider().sendFortmaticAsync(e1, function(e2, t2) {
                    e2 ? n1(e2) : r1(t2 ? t2.result : {
                    });
                });
            });
        }, t.randomId = n, t.findExistingResponse = function(e1, t1) {
            for(var r1 = 0; r1 < e1.length; r1++)if (e1[r1].id === t1) return e1[r1];
            return null;
        };
    },
    function(e, t, r) {
        e.exports = r(4);
    },
    function(e, t, r) {
        "use strict";
        var n = r(0), o = n(r(1)), a = n(r(5)), i = r(2), s = "fm_composeSend", c = "fm_logout", u = "fm_get_balances", l = "fm_get_transactions", f = "fm_is_logged_in", d = "fm_accountSettings", h = "fm_deposit", p = "fm_get_user", m = "fm_configure", y = {
        };
        e.exports = function e1(t1, r1, n1) {
            var g = this;
            if (o.default(this, e1), this.fortmaticClient = "https://x2.fortmatic.com", !t1) throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard.");
            this.apiKey = t1, this.options = n1, this.ethNetwork = r1, this.queryParams = btoa(JSON.stringify({
                API_KEY: t1,
                ETH_NETWORK: r1
            })), this.transactions = {
                send: function(e2, t2) {
                    var r2 = new v(s, {
                        to: e2.to,
                        value: e2.amount
                    });
                    g.getProvider().sendFortmaticAsync(r2, t2);
                }
            }, this.getProvider = function() {
                return y["fortmatic-".concat(g.queryParams)] || (y["fortmatic-".concat(g.queryParams)] = new a.default(g.fortmaticClient, {
                    API_KEY: t1,
                    ETH_NETWORK: r1
                })), y["fortmatic-".concat(g.queryParams)];
            }, this.user = {
                login: function() {
                    return g.getProvider().enable();
                },
                logout: function() {
                    g.getProvider().account = null, g.getProvider().network = null;
                    var e2 = new v(c);
                    return i.sendFortmaticAsyncWrapper.call(g, e2);
                },
                getUser: function() {
                    var e2 = new v(p);
                    return i.sendFortmaticAsyncWrapper.call(g, e2);
                },
                getBalances: function() {
                    var e2 = new v(u);
                    return i.sendFortmaticAsyncWrapper.call(g, e2);
                },
                getTransactions: function() {
                    var e2 = new v(l);
                    return i.sendFortmaticAsyncWrapper.call(g, e2);
                },
                isLoggedIn: function() {
                    var e2 = new v(f);
                    return i.sendFortmaticAsyncWrapper.call(g, e2);
                },
                settings: function() {
                    var e2 = new v(d);
                    return i.sendFortmaticAsyncWrapper.call(g, e2);
                },
                deposit: function(e2) {
                    var t2 = new v(h, e2);
                    return i.sendFortmaticAsyncWrapper.call(g, t2);
                }
            }, this.configure = function() {
                var e2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
                }, t2 = new v(m);
                return t2.params = [
                    e2
                ], i.sendFortmaticAsyncWrapper.call(g, t2);
            };
        };
        var v = function e2(t1, r1) {
            o.default(this, e2), this.id = i.randomId(), this.method = t1, this.params = r1 ? [
                r1
            ] : [
                {
                }
            ];
        };
    },
    function(e, t, r) {
        "use strict";
        var n = r(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = n(r(6)), a = n(r(9)), i = n(r(1)), s = n(r(10)), c = r(11), u = n(r(12)), l = r(2), f = function() {
            function e1(t1, r1) {
                if (i.default(this, e1), this.fortmaticClient = t1, this.requests = {
                }, this.queue = [], this.account = null, this.network = null, this.isFortmatic = !0, this.overlayReady = !1, this.isLoggedIn = !1, this.postMessages = {
                    FORTMATIC_HANDLE_BATCH_REQUEST: "FORTMATIC_HANDLE_BATCH_REQUEST",
                    FORTMATIC_HANDLE_REQUEST: "FORTMATIC_HANDLE_REQUEST",
                    FORTMATIC_HANDLE_FORTMATIC_REQUEST: "FORTMATIC_HANDLE_FORTMATIC_REQUEST",
                    FORTMATIC_HANDLE_RESPONSE: "FORTMATIC_HANDLE_RESPONSE",
                    FORTMATIC_OVERLAY_READY: "FORTMATIC_OVERLAY_READY",
                    FORTMATIC_SHOW_OVERLAY: "FORTMATIC_SHOW_OVERLAY",
                    FORTMATIC_HIDE_OVERLAY: "FORTMATIC_HIDE_OVERLAY",
                    FORTMATIC_USER_DENIED: "FORTMATIC_USER_DENIED",
                    FORTMATIC_USER_LOGOUT: "FORTMATIC_USER_LOGOUT",
                    FORTMATIC_UNAUTHORIZED_API_KEY: "FORTMATIC_UNAUTHORIZED_API_KEY"
                }, !r1.API_KEY) throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard.");
                this.options = {
                    API_KEY: r1.API_KEY,
                    ETH_NETWORK: r1.ETH_NETWORK,
                    DOMAIN_ORIGIN: window.location ? window.location.origin : "",
                    version: c.version
                }, this.queryParams = btoa(JSON.stringify(this.options)), this.constructPostMessage(), this.overlay = this.createOverlay(), this.listenMessage();
            }
            return s.default(e1, [
                {
                    key: "constructPostMessage",
                    value: function() {
                        var e2 = this;
                        Object.keys(this.postMessages).map(function(t1) {
                            e2.postMessages[t1] += "-".concat(e2.queryParams);
                        });
                    }
                },
                {
                    key: "createOverlay",
                    value: function() {
                        var e2 = this;
                        return new Promise(function(t1, r1) {
                            var n1 = function() {
                                if ((function() {
                                    var t2 = !0, r2 = !1, n2 = void 0;
                                    try {
                                        for(var o1, a1 = document.getElementsByClassName("fortmatic-iframe")[Symbol.iterator](); !(t2 = (o1 = a1.next()).done); t2 = !0)if (o1.value.src.includes(e2.queryParams)) return !1;
                                    } catch (e3) {
                                        r2 = !0, n2 = e3;
                                    } finally{
                                        try {
                                            t2 || null == a1.return || a1.return();
                                        } finally{
                                            if (r2) throw n2;
                                        }
                                    }
                                    return !0;
                                })()) {
                                    var r2 = document.createElement("style");
                                    r2.innerHTML = u.default.css, r2.type = "text/css", document.head.appendChild(r2);
                                    var n2 = document.createElement("iframe");
                                    n2.className = "fortmatic-iframe", n2.src = "".concat(e2.fortmaticClient, "/send?params=").concat(e2.queryParams), document.body.appendChild(n2);
                                    var o1 = document.createElement("img");
                                    o1.src = "https://static.fortmatic.com/assets/trans.gif", document.body.appendChild(o1), t1({
                                        iframe: n2
                                    });
                                } else console.error("Fortmatic: Duplicate instances found.");
                            };
                            [
                                "loaded",
                                "interactive",
                                "complete"
                            ].indexOf(document.readyState) > -1 ? n1() : window.addEventListener("load", n1.bind(e2), !1);
                        });
                    }
                },
                {
                    key: "showOverlay",
                    value: function() {
                        var e2 = a.default(o.default.mark(function e3() {
                            return o.default.wrap(function(e4) {
                                for(;;)switch(e4.prev = e4.next){
                                    case 0:
                                        return e4.next = 2, this.overlay;
                                    case 2:
                                        e4.sent.iframe.style.display = "block";
                                    case 4:
                                    case "end":
                                        return e4.stop();
                                }
                            }, e3, this);
                        }));
                        return function() {
                            return e2.apply(this, arguments);
                        };
                    }()
                },
                {
                    key: "hideOverlay",
                    value: function() {
                        var e2 = a.default(o.default.mark(function e3() {
                            return o.default.wrap(function(e4) {
                                for(;;)switch(e4.prev = e4.next){
                                    case 0:
                                        return e4.next = 2, this.overlay;
                                    case 2:
                                        e4.sent.iframe.style.display = "none";
                                    case 4:
                                    case "end":
                                        return e4.stop();
                                }
                            }, e3, this);
                        }));
                        return function() {
                            return e2.apply(this, arguments);
                        };
                    }()
                },
                {
                    key: "sendAsync",
                    value: function(e2, t1) {
                        e2.length > 0 ? this.enqueue({
                            payload: {
                                id: l.randomId(),
                                batch: e2.map(function(e3) {
                                    return e3.id = l.randomId(), e3;
                                }),
                                method: "eth_batchRequest"
                            },
                            cb: t1
                        }) : this.enqueue({
                            payload: e2,
                            cb: t1
                        });
                    }
                },
                {
                    key: "sendFortmaticAsync",
                    value: function(e2, t1) {
                        this.enqueue({
                            payload: e2,
                            cb: t1,
                            isNative: !0
                        });
                    }
                },
                {
                    key: "send",
                    value: function(e2, t1) {
                        if ("string" == typeof e2) return l.sendAsyncWrapper.call(this, e2, t1);
                        if (!t1) {
                            console.warn("Non-async web3 methods will be deprecated in web3 > 1.0, and are not supported by the Fortmatic provider. An async method to be used instead."), this.sendAsync(e2, function() {
                            });
                            var r1 = {
                            };
                            switch(e2.method){
                                case "eth_accounts":
                                    r1 = this.account ? [
                                        this.account
                                    ] : [];
                                    break;
                                case "eth_coinbase":
                                    r1 = this.account;
                                    break;
                                case "net_version":
                                    r1 = this.network || (this.options.API_KEY.startsWith("pk_live") ? 1 : 4);
                                    break;
                                case "eth_uninstallFilter":
                                    r1 = !0;
                                    break;
                                default:
                                    r1 = {
                                    };
                            }
                            return {
                                id: e2.id,
                                jsonrpc: e2.jsonrpc,
                                result: r1
                            };
                        }
                        this.sendAsync(e2, t1);
                    }
                },
                {
                    key: "enqueue",
                    value: function(e2) {
                        this.queue.push(e2), this.overlayReady && this.dequeue();
                    }
                },
                {
                    key: "dequeue",
                    value: function() {
                        var e2 = a.default(o.default.mark(function e3() {
                            var t1, r3, n1, a1 = this;
                            return o.default.wrap(function(e4) {
                                for(;;)switch(e4.prev = e4.next){
                                    case 0:
                                        if (0 !== this.queue.length) {
                                            e4.next = 2;
                                            break;
                                        }
                                        return e4.abrupt("return");
                                    case 2:
                                        if (!(t1 = this.queue.shift())) {
                                            e4.next = 11;
                                            break;
                                        }
                                        return r3 = t1.payload, n1 = t1.cb, r3.id = l.randomId(), e4.next = 9, this.postMessage(t1.isNative ? this.postMessages.FORTMATIC_HANDLE_FORTMATIC_REQUEST : this.postMessages.FORTMATIC_HANDLE_REQUEST, t1.payload);
                                    case 9:
                                        r3.batch && r3.batch.length > 0 ? (r3.batch.forEach(function(e5) {
                                            a1.requests[e5.id] = {
                                                parentId: r3.id,
                                                payload: e5,
                                                cb: function(e6, t2) {
                                                    var n3 = a1.requests[r3.id].batchResponse;
                                                    if (e6 && e6.response && !l.findExistingResponse(n3, e6.response.id)) throw n3.push({
                                                        jsonrpc: "2.0",
                                                        id: e6.response.id,
                                                        error: {
                                                            code: e6.response.code,
                                                            message: e6.response.message
                                                        }
                                                    }), a1.requests[r3.id].cb(null, n3), e6.response;
                                                    if (t2 && t2.result && !l.findExistingResponse(n3, t2.id)) return n3.push(t2);
                                                    throw new Error("Fortmatic: unexpected callback behavior");
                                                }
                                            };
                                        }), this.requests[r3.id] = {
                                            payload: r3,
                                            cb: n1,
                                            batchResponse: []
                                        }) : this.requests[r3.id] = {
                                            payload: r3,
                                            cb: n1
                                        }, this.dequeue();
                                    case 11:
                                    case "end":
                                        return e4.stop();
                                }
                            }, e3, this);
                        }));
                        return function() {
                            return e2.apply(this, arguments);
                        };
                    }()
                },
                {
                    key: "postMessage",
                    value: function() {
                        var e2 = a.default(o.default.mark(function e3(t1, r3) {
                            var n1;
                            return o.default.wrap(function(e4) {
                                for(;;)switch(e4.prev = e4.next){
                                    case 0:
                                        return e4.next = 2, this.overlay;
                                    case 2:
                                        if (!(n1 = e4.sent).iframe.contentWindow) {
                                            e4.next = 7;
                                            break;
                                        }
                                        n1.iframe.contentWindow.postMessage({
                                            msgType: t1,
                                            payload: r3
                                        }, "*"), e4.next = 8;
                                        break;
                                    case 7:
                                        throw new Error("Fortmatic: Modal is not ready.");
                                    case 8:
                                    case "end":
                                        return e4.stop();
                                }
                            }, e3, this);
                        }));
                        return function(t1, r3) {
                            return e2.apply(this, arguments);
                        };
                    }()
                },
                {
                    key: "enable",
                    value: function() {
                        return l.sendAsyncWrapper.call(this, "eth_accounts");
                    }
                },
                {
                    key: "listenMessage",
                    value: function() {
                        var e2 = this;
                        window.addEventListener("message", function(t1) {
                            if (t1.origin === e2.fortmaticClient) {
                                var r3 = t1.data.response ? t1.data.response.id : null;
                                switch(t1.data.msgType){
                                    case e2.postMessages.FORTMATIC_OVERLAY_READY:
                                        e2.overlayReady = !0, e2.dequeue();
                                        break;
                                    case e2.postMessages.FORTMATIC_HANDLE_RESPONSE:
                                        try {
                                            e2.requests[r3].cb(null, t1.data.response);
                                            var n1 = e2.requests[r3].parentId;
                                            n1 && e2.requests[n1].payload.batch.length === e2.requests[n1].batchResponse.length && e2.requests[n1].cb(null, e2.requests[n1].batchResponse), "eth_accounts" === e2.requests[r3].payload.method ? e2.account = t1.data.response.result[0] : "eth_coinbase" === e2.requests[r3].payload.method ? e2.account = t1.data.response.result : "net_version" === e2.requests[r3].payload.method && (e2.network = t1.data.response.result);
                                        } catch (e3) {
                                        }
                                        e2.isLoggedIn = !0, e2.dequeue();
                                        break;
                                    case e2.postMessages.FORTMATIC_HIDE_OVERLAY:
                                        e2.hideOverlay();
                                        break;
                                    case e2.postMessages.FORTMATIC_SHOW_OVERLAY:
                                        e2.showOverlay();
                                        break;
                                    case e2.postMessages.FORTMATIC_USER_LOGOUT:
                                        e2.account = null, e2.network = null, e2.isLoggedIn = !1;
                                        break;
                                    case e2.postMessages.FORTMATIC_UNAUTHORIZED_API_KEY:
                                        throw e2.overlayReady = !1, new Error("Given API key is not authorized to access the resource.");
                                    case e2.postMessages.FORTMATIC_USER_DENIED:
                                        if (r3) {
                                            var o2 = t1.data.response && t1.data.response.message ? t1.data.response.message : "Fortmatic: Modal was closed without executing action!", a1 = t1.data.response && t1.data.response.code ? t1.data.response.code : 1;
                                            e2.requests[r3].cb({
                                                message: o2,
                                                code: a1,
                                                response: t1.data.response
                                            });
                                        } else e2.queue.forEach(function(e3) {
                                            return e3.cb({
                                                message: "Fortmatic: Modal was closed without executing action!",
                                                code: 1
                                            });
                                        });
                                        e2.dequeue();
                                }
                            }
                        });
                    }
                }
            ]), e1;
        }();
        t.default = f;
    },
    function(e, t, r4) {
        e.exports = r4(7);
    },
    function(e, t, r4) {
        var n3 = function() {
            return this || "object" == typeof self && self;
        }() || Function("return this")(), o3 = n3.regeneratorRuntime && Object.getOwnPropertyNames(n3).indexOf("regeneratorRuntime") >= 0, a2 = o3 && n3.regeneratorRuntime;
        if (n3.regeneratorRuntime = void 0, e.exports = r4(8), o3) n3.regeneratorRuntime = a2;
        else try {
            delete n3.regeneratorRuntime;
        } catch (e1) {
            n3.regeneratorRuntime = void 0;
        }
    },
    function(e, t) {
        !function(t1) {
            var r4, n3 = Object.prototype, o3 = n3.hasOwnProperty, a2 = "function" == typeof Symbol ? Symbol : {
            }, i = a2.iterator || "@@iterator", s1 = a2.asyncIterator || "@@asyncIterator", c = a2.toStringTag || "@@toStringTag", u = "object" == typeof e, l = t1.regeneratorRuntime;
            if (l) u && (e.exports = l);
            else {
                (l = t1.regeneratorRuntime = u ? e.exports : {
                }).wrap = _;
                var f = "suspendedStart", d = "suspendedYield", h = "executing", p = "completed", m = {
                }, y = {
                };
                y[i] = function() {
                    return this;
                };
                var v = Object.getPrototypeOf, g = v && v(v(L([])));
                g && g !== n3 && o3.call(g, i) && (y = g);
                var b = A.prototype = w.prototype = Object.create(y);
                T.prototype = b.constructor = A, A.constructor = T, A[c] = T.displayName = "GeneratorFunction", l.isGeneratorFunction = function(e1) {
                    var t2 = "function" == typeof e1 && e1.constructor;
                    return !!t2 && (t2 === T || "GeneratorFunction" === (t2.displayName || t2.name));
                }, l.mark = function(e1) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e1, A) : (e1.__proto__ = A, c in e1 || (e1[c] = "GeneratorFunction")), e1.prototype = Object.create(b), e1;
                }, l.awrap = function(e1) {
                    return {
                        __await: e1
                    };
                }, O(R.prototype), R.prototype[s1] = function() {
                    return this;
                }, l.AsyncIterator = R, l.async = function(e1, t2, r5, n4) {
                    var o4 = new R(_(e1, t2, r5, n4));
                    return l.isGeneratorFunction(t2) ? o4 : o4.next().then(function(e2) {
                        return e2.done ? e2.value : o4.next();
                    });
                }, O(b), b[c] = "Generator", b[i] = function() {
                    return this;
                }, b.toString = function() {
                    return "[object Generator]";
                }, l.keys = function(e1) {
                    var t2 = [];
                    for(var r5 in e1)t2.push(r5);
                    return t2.reverse(), function r6() {
                        for(; t2.length;){
                            var n4 = t2.pop();
                            if (n4 in e1) return r6.value = n4, r6.done = !1, r6;
                        }
                        return r6.done = !0, r6;
                    };
                }, l.values = L, F.prototype = {
                    constructor: F,
                    reset: function(e1) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = r4, this.done = !1, this.delegate = null, this.method = "next", this.arg = r4, this.tryEntries.forEach(M), !e1) for(var t2 in this)"t" === t2.charAt(0) && o3.call(this, t2) && !isNaN(+t2.slice(1)) && (this[t2] = r4);
                    },
                    stop: function() {
                        this.done = !0;
                        var e1 = this.tryEntries[0].completion;
                        if ("throw" === e1.type) throw e1.arg;
                        return this.rval;
                    },
                    dispatchException: function(e1) {
                        if (this.done) throw e1;
                        var t2 = this;
                        function n5(n6, o4) {
                            return s2.type = "throw", s2.arg = e1, t2.next = n6, o4 && (t2.method = "next", t2.arg = r4), !!o4;
                        }
                        for(var a3 = this.tryEntries.length - 1; a3 >= 0; --a3){
                            var i1 = this.tryEntries[a3], s2 = i1.completion;
                            if ("root" === i1.tryLoc) return n5("end");
                            if (i1.tryLoc <= this.prev) {
                                var c1 = o3.call(i1, "catchLoc"), u1 = o3.call(i1, "finallyLoc");
                                if (c1 && u1) {
                                    if (this.prev < i1.catchLoc) return n5(i1.catchLoc, !0);
                                    if (this.prev < i1.finallyLoc) return n5(i1.finallyLoc);
                                } else if (c1) {
                                    if (this.prev < i1.catchLoc) return n5(i1.catchLoc, !0);
                                } else {
                                    if (!u1) throw new Error("try statement without catch or finally");
                                    if (this.prev < i1.finallyLoc) return n5(i1.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e1, t2) {
                        for(var r5 = this.tryEntries.length - 1; r5 >= 0; --r5){
                            var n5 = this.tryEntries[r5];
                            if (n5.tryLoc <= this.prev && o3.call(n5, "finallyLoc") && this.prev < n5.finallyLoc) {
                                var a3 = n5;
                                break;
                            }
                        }
                        a3 && ("break" === e1 || "continue" === e1) && a3.tryLoc <= t2 && t2 <= a3.finallyLoc && (a3 = null);
                        var i2 = a3 ? a3.completion : {
                        };
                        return i2.type = e1, i2.arg = t2, a3 ? (this.method = "next", this.next = a3.finallyLoc, m) : this.complete(i2);
                    },
                    complete: function(e1, t2) {
                        if ("throw" === e1.type) throw e1.arg;
                        return "break" === e1.type || "continue" === e1.type ? this.next = e1.arg : "return" === e1.type ? (this.rval = this.arg = e1.arg, this.method = "return", this.next = "end") : "normal" === e1.type && t2 && (this.next = t2), m;
                    },
                    finish: function(e1) {
                        for(var t2 = this.tryEntries.length - 1; t2 >= 0; --t2){
                            var r5 = this.tryEntries[t2];
                            if (r5.finallyLoc === e1) return this.complete(r5.completion, r5.afterLoc), M(r5), m;
                        }
                    },
                    catch: function(e1) {
                        for(var t2 = this.tryEntries.length - 1; t2 >= 0; --t2){
                            var r6 = this.tryEntries[t2];
                            if (r6.tryLoc === e1) {
                                var n6 = r6.completion;
                                if ("throw" === n6.type) {
                                    var o4 = n6.arg;
                                    M(r6);
                                }
                                return o4;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e1, t2, n7) {
                        return this.delegate = {
                            iterator: L(e1),
                            resultName: t2,
                            nextLoc: n7
                        }, "next" === this.method && (this.arg = r4), m;
                    }
                };
            }
            function _(e1, t2, r7, n7) {
                var o5 = t2 && t2.prototype instanceof w ? t2 : w, a4 = Object.create(o5.prototype), i2 = new F(n7 || []);
                return a4._invoke = (function(e2, t3, r8) {
                    var n8 = f;
                    return function(o6, a5) {
                        if (n8 === h) throw new Error("Generator is already running");
                        if (n8 === p) {
                            if ("throw" === o6) throw a5;
                            return k();
                        }
                        for(r8.method = o6, r8.arg = a5;;){
                            var i3 = r8.delegate;
                            if (i3) {
                                var s3 = I(i3, r8);
                                if (s3) {
                                    if (s3 === m) continue;
                                    return s3;
                                }
                            }
                            if ("next" === r8.method) r8.sent = r8._sent = r8.arg;
                            else if ("throw" === r8.method) {
                                if (n8 === f) throw n8 = p, r8.arg;
                                r8.dispatchException(r8.arg);
                            } else "return" === r8.method && r8.abrupt("return", r8.arg);
                            n8 = h;
                            var c2 = E(e2, t3, r8);
                            if ("normal" === c2.type) {
                                if (n8 = r8.done ? p : d, c2.arg === m) continue;
                                return {
                                    value: c2.arg,
                                    done: r8.done
                                };
                            }
                            "throw" === c2.type && (n8 = p, r8.method = "throw", r8.arg = c2.arg);
                        }
                    };
                })(e1, r7, i2), a4;
            }
            function E(e1, t2, r7) {
                try {
                    return {
                        type: "normal",
                        arg: e1.call(t2, r7)
                    };
                } catch (e2) {
                    return {
                        type: "throw",
                        arg: e2
                    };
                }
            }
            function w() {
            }
            function T() {
            }
            function A() {
            }
            function O(e1) {
                [
                    "next",
                    "throw",
                    "return"
                ].forEach(function(t2) {
                    e1[t2] = function(e2) {
                        return this._invoke(t2, e2);
                    };
                });
            }
            function R(e1) {
                var t2;
                this._invoke = function(r7, n7) {
                    function a4() {
                        return new Promise(function(t3, a5) {
                            !function t4(r8, n8, a6, i2) {
                                var s4 = E(e1[r8], e1, n8);
                                if ("throw" !== s4.type) {
                                    var c3 = s4.arg, u2 = c3.value;
                                    return u2 && "object" == typeof u2 && o3.call(u2, "__await") ? Promise.resolve(u2.__await).then(function(e2) {
                                        t4("next", e2, a6, i2);
                                    }, function(e2) {
                                        t4("throw", e2, a6, i2);
                                    }) : Promise.resolve(u2).then(function(e2) {
                                        c3.value = e2, a6(c3);
                                    }, function(e2) {
                                        return t4("throw", e2, a6, i2);
                                    });
                                }
                                i2(s4.arg);
                            }(r7, n7, t3, a5);
                        });
                    }
                    return t2 = t2 ? t2.then(a4, a4) : a4();
                };
            }
            function I(e1, t2) {
                var n7 = e1.iterator[t2.method];
                if (n7 === r4) {
                    if (t2.delegate = null, "throw" === t2.method) {
                        if (e1.iterator.return && (t2.method = "return", t2.arg = r4, I(e1, t2), "throw" === t2.method)) return m;
                        t2.method = "throw", t2.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return m;
                }
                var o5 = E(n7, e1.iterator, t2.arg);
                if ("throw" === o5.type) return t2.method = "throw", t2.arg = o5.arg, t2.delegate = null, m;
                var a4 = o5.arg;
                return a4 ? a4.done ? (t2[e1.resultName] = a4.value, t2.next = e1.nextLoc, "return" !== t2.method && (t2.method = "next", t2.arg = r4), t2.delegate = null, m) : a4 : (t2.method = "throw", t2.arg = new TypeError("iterator result is not an object"), t2.delegate = null, m);
            }
            function x(e1) {
                var t2 = {
                    tryLoc: e1[0]
                };
                1 in e1 && (t2.catchLoc = e1[1]), 2 in e1 && (t2.finallyLoc = e1[2], t2.afterLoc = e1[3]), this.tryEntries.push(t2);
            }
            function M(e1) {
                var t2 = e1.completion || {
                };
                t2.type = "normal", delete t2.arg, e1.completion = t2;
            }
            function F(e1) {
                this.tryEntries = [
                    {
                        tryLoc: "root"
                    }
                ], e1.forEach(x, this), this.reset(!0);
            }
            function L(e1) {
                if (e1) {
                    var t2 = e1[i];
                    if (t2) return t2.call(e1);
                    if ("function" == typeof e1.next) return e1;
                    if (!isNaN(e1.length)) {
                        var n7 = -1, a4 = function t3() {
                            for(; (++n7) < e1.length;)if (o3.call(e1, n7)) return t3.value = e1[n7], t3.done = !1, t3;
                            return t3.value = r4, t3.done = !0, t3;
                        };
                        return a4.next = a4;
                    }
                }
                return {
                    next: k
                };
            }
            function k() {
                return {
                    value: r4,
                    done: !0
                };
            }
        }(function() {
            return this || "object" == typeof self && self;
        }() || Function("return this")());
    },
    function(e, t1) {
        function r4(e1, t3, r7, n3, o3, a2, i2) {
            try {
                var s1 = e1[a2](i2), c4 = s1.value;
            } catch (e2) {
                return void r7(e2);
            }
            s1.done ? t3(c4) : Promise.resolve(c4).then(n3, o3);
        }
        e.exports = function(e1) {
            return function() {
                var t3 = this, n3 = arguments;
                return new Promise(function(o3, a2) {
                    var i2 = e1.apply(t3, n3);
                    function s1(e2) {
                        r4(i2, o3, a2, s1, c4, "next", e2);
                    }
                    function c4(e2) {
                        r4(i2, o3, a2, s1, c4, "throw", e2);
                    }
                    s1(void 0);
                });
            };
        };
    },
    function(e, t1) {
        function r4(e1, t3) {
            for(var r7 = 0; r7 < t3.length; r7++){
                var n3 = t3[r7];
                n3.enumerable = n3.enumerable || !1, n3.configurable = !0, "value" in n3 && (n3.writable = !0), Object.defineProperty(e1, n3.key, n3);
            }
        }
        e.exports = function(e1, t3, n8) {
            return t3 && r4(e1.prototype, t3), n8 && r4(e1, n8), e1;
        };
    },
    function(e) {
        e.exports = {
            name: "fortmatic",
            version: "1.1.3",
            description: "Fortmatic Javascript SDK",
            main: "lib/fortmatic.js",
            scripts: {
                build: "WEBPACK_ENV=production webpack",
                "build:dev": "WEBPACK_ENV=development BABEL_ENV=development webpack --progress --colors --watch",
                test: "nyc --reporter=lcov --reporter=text-summary ava"
            },
            author: "Fortmatic <team@fortmatic.com> (https://fortmatic.com/)",
            license: "MIT",
            repository: {
                type: "git",
                url: "https://github.com/fortmatic/fortmatic-js"
            },
            keywords: [
                "Auth",
                "Login",
                "Web3",
                "Crypto",
                "Ethereum",
                "MetaMask",
                "Wallet",
                "Blockchain",
                "Dapp"
            ],
            homepage: "https://www.fortmatic.com",
            ava: {
                require: [
                    "@babel/register"
                ],
                files: [
                    "test/**/*.spec.js"
                ],
                babel: {
                    testOptions: {
                        presets: [
                            "@babel/env"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-function-bind",
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                verbose: !0
            },
            nyc: {
                all: !1,
                "check-coverage": !0,
                "per-file": !0,
                lines: 80,
                statements: 80,
                functions: 80,
                branches: 80,
                include: [
                    "src/**/*.js"
                ],
                exclude: [
                    "*/style.js"
                ],
                require: [],
                reporter: [
                    "html",
                    "lcov"
                ]
            },
            dependencies: {
                "@babel/runtime": "7.3.4"
            },
            devDependencies: {
                "@babel/core": "7.3.4",
                "@babel/plugin-proposal-function-bind": "7.2.0",
                "@babel/plugin-transform-modules-commonjs": "7.2.0",
                "@babel/plugin-transform-runtime": "7.3.4",
                "@babel/preset-env": "7.3.4",
                "@babel/register": "7.0.0",
                ava: "2.2.0",
                "babel-eslint": "10.0.1",
                "babel-loader": "8.0.5",
                eslint: "5.9.0",
                lodash: "4.17.11",
                nyc: "13.1.0",
                sinon: "7.1.1",
                webpack: "4.26.1",
                "webpack-cli": "3.1.2"
            }
        };
    },
    function(e, t1, r4) {
        "use strict";
        t1.css = "\n  .fortmatic-iframe {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: 0;\n    z-index: 2147483647;\n  }\n";
    }
]);

},{}]},["iFggJ"], null, "parcelRequire81fb")

//# sourceMappingURL=fortmatic.d0412bf2.js.map
