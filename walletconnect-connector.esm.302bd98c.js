function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire81fb;t.register("eHg6u",(function(n,r){e(n.exports,"URI_AVAILABLE",(()=>d)),e(n.exports,"UserRejectedRequestError",(()=>f)),e(n.exports,"WalletConnectConnector",(()=>v));var o=t("5KsNI");function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,n){return(s=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function l(e){var t="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d="URI_AVAILABLE",f=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return i(t,e),t}(l(Error));var v=function(e){function n(t){var n,r,o,i;return(n=e.call(this,{supportedChainIds:(r=t,o=r.supportedChainIds,i=r.rpc,o||(i?Object.keys(i).map((function(e){return Number(e)})):void 0))})||this).config=t,n.handleChainChanged=n.handleChainChanged.bind(h(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(h(n)),n.handleDisconnect=n.handleDisconnect.bind(h(n)),n}i(n,e);var r=n.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e})},r.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},r.handleDisconnect=function(){this.emitDeactivate(),this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider=void 0),this.emitDeactivate()},r.activate=function(){try{var e=this,n=function(){function t(){return Promise.resolve(e.walletConnectProvider.enable().then((function(e){return e[0]})).catch((function(e){if("User closed modal"===e.message)throw new f;throw e}))).then((function(t){return e.walletConnectProvider.on("disconnect",e.handleDisconnect),e.walletConnectProvider.on("chainChanged",e.handleChainChanged),e.walletConnectProvider.on("accountsChanged",e.handleAccountsChanged),{provider:e.walletConnectProvider,account:t}}))}var n=function(){if(!e.walletConnectProvider.wc.connected)return Promise.resolve(e.walletConnectProvider.wc.createSession({chainId:e.supportedChainIds&&e.supportedChainIds.length>0?e.supportedChainIds[0]:1})).then((function(){e.emit(d,e.walletConnectProvider.wc.uri)}))}();return n&&n.then?n.then(t):t()},r=function(){if(!e.walletConnectProvider)return Promise.resolve(res.then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(){return t("2I56r")})).then((function(t,n){e.walletConnectProvider=new n(e.config)}))}();return Promise.resolve(r&&r.then?r.then(n):n())}catch(e){return Promise.reject(e)}},r.getProvider=function(){try{return Promise.resolve(this.walletConnectProvider)}catch(e){return Promise.reject(e)}},r.getChainId=function(){try{return Promise.resolve(this.walletConnectProvider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},r.getAccount=function(){try{return Promise.resolve(this.walletConnectProvider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},r.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged))},r.close=function(){try{var e;return Promise.resolve(null==(e=this.walletConnectProvider)?void 0:e.close()).then((function(){}))}catch(e){return Promise.reject(e)}},n}(o.AbstractConnector)})),t.register("2I56r",(function(e,n){e.exports=Promise.all([import("./"+t("7PhYn").resolve("7sqgL")),import("./"+t("7PhYn").resolve("eEKhR")),import("./"+t("7PhYn").resolve("gnKUJ")),import("./"+t("7PhYn").resolve("hVYDZ"))]).then((()=>t("hNdRM")))}));
//# sourceMappingURL=walletconnect-connector.esm.302bd98c.js.map
