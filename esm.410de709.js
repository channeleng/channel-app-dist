function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire81fb;t.register("1GySR",(function(e,r){var n=t("jigrA"),o=t("efVEs");function s(e,t){return new Promise((r=>{const n=setTimeout(r,e);n.unref&&t&&n.unref()}))}e.exports=class extends o{constructor(e={}){if(!e.provider)throw new Error("PollingBlockTracker - no provider specified.");const t=e.pollingInterval||2e4,r=e.retryTimeout||t/10,n=void 0===e.keepEventLoopActive||e.keepEventLoopActive,o=e.setSkipCacheFlag||!1;super(Object.assign({blockResetDuration:t},e)),this._provider=e.provider,this._pollingInterval=t,this._retryTimeout=r,this._keepEventLoopActive=n,this._setSkipCacheFlag=o}async checkForLatestBlock(){return await this._updateLatestBlock(),await this.getLatestBlock()}_start(){this._performSync().catch((e=>this.emit("error",e)))}async _performSync(){for(;this._isRunning;)try{await this._updateLatestBlock(),await s(this._pollingInterval,!this._keepEventLoopActive)}catch(e){const t=new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${e.stack}`);try{this.emit("error",t)}catch(e){console.error(t)}await s(this._retryTimeout,!this._keepEventLoopActive)}}async _updateLatestBlock(){const e=await this._fetchLatestBlock();this._newPotentialLatest(e)}async _fetchLatestBlock(){const e={jsonrpc:"2.0",id:1,method:"eth_blockNumber",params:[]};this._setSkipCacheFlag&&(e.skipCache=!0);const t=await n((t=>this._provider.sendAsync(e,t)))();if(t.error)throw new Error(`PollingBlockTracker - encountered error fetching block:\n${t.error}`);return t.result}}})),t.register("jigrA",(function(e,t){const r=(e,t)=>function(){const r=t.promiseModule,n=new Array(arguments.length);for(let e=0;e<arguments.length;e++)n[e]=arguments[e];return new r(((r,o)=>{t.errorFirst?n.push((function(e,n){if(t.multiArgs){const t=new Array(arguments.length-1);for(let e=1;e<arguments.length;e++)t[e-1]=arguments[e];e?(t.unshift(e),o(t)):r(t)}else e?o(e):r(n)})):n.push((function(e){if(t.multiArgs){const e=new Array(arguments.length-1);for(let t=0;t<arguments.length;t++)e[t]=arguments[t];r(e)}else r(e)})),e.apply(this,n)}))};e.exports=(e,t)=>{t=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:!0,promiseModule:Promise},t);const n=e=>{const r=t=>"string"==typeof t?e===t:t.test(e);return t.include?t.include.some(r):!t.exclude.some(r)};let o;o="function"==typeof e?function(){return t.excludeMain?e.apply(this,arguments):r(e,t).apply(this,arguments)}:Object.create(Object.getPrototypeOf(e));for(const s in e){const i=e[s];o[s]="function"==typeof i&&n(s)?r(i,t):i}return o}})),t.register("efVEs",(function(e,r){t("l2J8l"),t("jigrA");var n=t("1DLCy");const o=(e,t)=>e+t,s=["sync","latest"];function i(e){return Number.parseInt(e,16)}e.exports=class extends n{constructor(e={}){super(),this._blockResetDuration=e.blockResetDuration||2e4,this._blockResetTimeout,this._currentBlock=null,this._isRunning=!1,this._onNewListener=this._onNewListener.bind(this),this._onRemoveListener=this._onRemoveListener.bind(this),this._resetCurrentBlock=this._resetCurrentBlock.bind(this),this._setupInternalEvents()}isRunning(){return this._isRunning}getCurrentBlock(){return this._currentBlock}async getLatestBlock(){if(this._currentBlock)return this._currentBlock;return await new Promise((e=>this.once("latest",e)))}removeAllListeners(e){e?super.removeAllListeners(e):super.removeAllListeners(),this._setupInternalEvents(),this._onRemoveListener()}_start(){}_end(){}_setupInternalEvents(){this.removeListener("newListener",this._onNewListener),this.removeListener("removeListener",this._onRemoveListener),this.on("newListener",this._onNewListener),this.on("removeListener",this._onRemoveListener)}_onNewListener(e,t){s.includes(e)&&this._maybeStart()}_onRemoveListener(e,t){this._getBlockTrackerEventCount()>0||this._maybeEnd()}_maybeStart(){this._isRunning||(this._isRunning=!0,this._cancelBlockResetTimeout(),this._start())}_maybeEnd(){this._isRunning&&(this._isRunning=!1,this._setupBlockResetTimeout(),this._end())}_getBlockTrackerEventCount(){return s.map((e=>this.listenerCount(e))).reduce(o)}_newPotentialLatest(e){const t=this._currentBlock;t&&i(e)<=i(t)||this._setCurrentBlock(e)}_setCurrentBlock(e){const t=this._currentBlock;this._currentBlock=e,this.emit("latest",e),this.emit("sync",{oldBlock:t,newBlock:e})}_setupBlockResetTimeout(){this._cancelBlockResetTimeout(),this._blockResetTimeout=setTimeout(this._resetCurrentBlock,this._blockResetDuration),this._blockResetTimeout.unref&&this._blockResetTimeout.unref()}_cancelBlockResetTimeout(){clearTimeout(this._blockResetTimeout)}_resetCurrentBlock(){this._currentBlock=null}}})),t.register("1DLCy",(function(e,r){var n=t("8TwQf"),o=t("2XJVW"),s="object"==typeof Reflect?Reflect:null,i=s&&"function"==typeof s.apply?s.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};function a(){o.call(this)}function c(e,t,r){try{i(e,t,r)}catch(e){setTimeout((()=>{throw e}))}}function u(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}e.exports=a,n.inherits(a,o),a.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var i=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw i.context=s,i}var a=o[e];if(void 0===a)return!1;if("function"==typeof a)c(a,this,t);else{var l=a.length,d=u(a,l);for(r=0;r<l;++r)c(d[r],this,t)}return!0}})),t.register("hhTb3",(function(e,r){t("1wFLE");var n=t("jeTK1").default,o=t("5Y2aI").createAsyncMiddleware,s=t("b2r2y"),i=t("fPwaR"),a=t("8Fcrf"),c=t("9Ip2w"),u=t("g5WsN"),l=u.intToHex,d=u.hexToInt;function p(e){return f((async(...t)=>{const r=await e(...t);return l(r.id)}))}function f(e){return o((async(t,r)=>{const n=await e.apply(null,t.params);r.result=n}))}function h(e,t){const r=[];for(let t in e)r.push(e[t]);return r}e.exports=function({blockTracker:e,provider:t}){let r=0,o={};const u=new n,m=function({mutex:e}){return t=>async(r,n,o,s)=>{(await e.acquire())(),t(r,n,o,s)}}({mutex:u}),g=s({eth_newFilter:m(p(v)),eth_newBlockFilter:m(p(w)),eth_newPendingTransactionFilter:m(p(_)),eth_uninstallFilter:m(f(R)),eth_getFilterChanges:m(f(b)),eth_getFilterLogs:m(f(x))}),y=async({oldBlock:e,newBlock:t})=>{if(0===o.length)return;const r=await u.acquire();try{await Promise.all(h(o).map((async r=>{try{await r.update({oldBlock:e,newBlock:t})}catch(e){console.error(e)}})))}catch(e){console.error(e)}r()};async function v(e){const r=new i({provider:t,params:e});await E(r);return r}async function w(){const e=new a({provider:t});await E(e);return e}async function _(){const e=new c({provider:t});await E(e);return e}async function b(e){const t=d(e),r=o[t];if(!r)throw new Error(`No filter for index "${t}"`);return r.getChangesAndClear()}async function x(e){const t=d(e),r=o[t];if(!r)throw new Error(`No filter for index "${t}"`);return"log"===r.type?results=r.getAllResults():results=[],results}async function R(e){const t=d(e),r=o[t],n=Boolean(r);return n&&await async function(e){const t=h(o).length;delete o[e];const r=h(o).length;k({prevFilterCount:t,newFilterCount:r})}(t),n}async function E(t){const n=h(o).length,s=await e.getLatestBlock();await t.initialize({currentBlock:s}),r++,o[r]=t,t.id=r,t.idHex=l(r);return k({prevFilterCount:n,newFilterCount:h(o).length}),r}function k({prevFilterCount:t,newFilterCount:r}){0===t&&r>0?e.on("sync",y):t>0&&0===r&&e.removeListener("sync",y)}return g.newLogFilter=v,g.newBlockFilter=w,g.newPendingTransactionFilter=_,g.uninstallFilter=R,g.getFilterChanges=b,g.getFilterLogs=x,g.destroy=()=>{!async function(){const e=h(o).length;o={},k({prevFilterCount:e,newFilterCount:0})}()},g}})),t.register("1wFLE",(function(r,n){e(r.exports,"Mutex",(()=>t("jeTK1").default));t("jeTK1"),t("fqOeh"),t("inHdu")})),t.register("jeTK1",(function(r,n){e(r.exports,"default",(()=>i));var o=t("5pzBv"),s=t("fqOeh"),i=function(){function e(){this._semaphore=new s.default(1)}return e.prototype.acquire=function(){return o.__awaiter(this,void 0,void 0,(function(){var e;return o.__generator(this,(function(t){switch(t.label){case 0:return[4,this._semaphore.acquire()];case 1:return e=t.sent(),[2,e[1]]}}))}))},e.prototype.runExclusive=function(e){return this._semaphore.runExclusive((function(){return e()}))},e.prototype.isLocked=function(){return this._semaphore.isLocked()},e.prototype.release=function(){this._semaphore.release()},e}()})),t.register("5pzBv",(function(t,r){e(t.exports,"__awaiter",(()=>n)),e(t.exports,"__generator",(()=>o));function n(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))}function o(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}Object.create;Object.create})),t.register("fqOeh",(function(r,n){e(r.exports,"default",(()=>s));var o=t("5pzBv"),s=function(){function e(e){if(this._maxConcurrency=e,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}return e.prototype.acquire=function(){var e=this,t=this.isLocked(),r=new Promise((function(t){return e._queue.push(t)}));return t||this._dispatch(),r},e.prototype.runExclusive=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t,r,n;return o.__generator(this,(function(o){switch(o.label){case 0:return[4,this.acquire()];case 1:t=o.sent(),r=t[0],n=t[1],o.label=2;case 2:return o.trys.push([2,,4,5]),[4,e(r)];case 3:return[2,o.sent()];case 4:return n(),[7];case 5:return[2]}}))}))},e.prototype.isLocked=function(){return this._value<=0},e.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){var e=this._currentReleaser;this._currentReleaser=void 0,e()}},e.prototype._dispatch=function(){var e=this,t=this._queue.shift();if(t){var r=!1;this._currentReleaser=function(){r||(r=!0,e._value++,e._dispatch())},t([this._value--,this._currentReleaser])}},e}()})),t.register("inHdu",(function(e,r){t("5pzBv")})),t.register("5Y2aI",(function(e,r){var n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=e.exports&&e.exports.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(e.exports,"__esModule",{value:!0}),o(t("kBcxi"),e.exports),o(t("1mTm4"),e.exports),o(t("lcTsZ"),e.exports),o(t("89kK1"),e.exports),o(t("7VaQO"),e.exports),o(t("cYGHX"),e.exports)})),t.register("kBcxi",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.createIdRemapMiddleware=void 0;var n=t("89kK1");e.exports.createIdRemapMiddleware=function(){return(e,t,r,o)=>{const s=e.id,i=n.getUniqueId();e.id=i,t.id=i,r((r=>{e.id=s,t.id=s,r()}))}}})),t.register("89kK1",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.getUniqueId=void 0;const r=4294967295;let n=Math.floor(Math.random()*r);e.exports.getUniqueId=function(){return n=(n+1)%r,n}})),t.register("1mTm4",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.createAsyncMiddleware=void 0,e.exports.createAsyncMiddleware=function(e){return async(t,r,n,o)=>{let s;const i=new Promise((e=>{s=e}));let a=null,c=!1;const u=async()=>{c=!0,n((e=>{a=e,s()})),await i};try{await e(t,r,u),c?(await i,a(null)):o(null)}catch(e){a?a(e):o(e)}}}})),t.register("lcTsZ",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.createScaffoldMiddleware=void 0,e.exports.createScaffoldMiddleware=function(e){return(t,r,n,o)=>{const s=e[t.method];return void 0===s?n():"function"==typeof s?s(t,r,n,o):(r.result=s,o())}}})),t.register("7VaQO",(function(e,r){var n=e.exports&&e.exports.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.JsonRpcEngine=void 0;const o=n(t("iow5v"));var s=t("2TNa5");class i extends o.default{constructor(){super(),this._middleware=[]}push(e){this._middleware.push(e)}handle(e,t){if(t&&"function"!=typeof t)throw new Error('"callback" must be a function if provided.');return Array.isArray(e)?t?this._handleBatch(e,t):this._handleBatch(e):t?this._handle(e,t):this._promiseHandle(e)}asMiddleware(){return async(e,t,r,n)=>{try{const[o,s,a]=await i._runAllMiddleware(e,t,this._middleware);return s?(await i._runReturnHandlers(a),n(o)):r((async e=>{try{await i._runReturnHandlers(a)}catch(t){return e(t)}return e()}))}catch(e){return n(e)}}}async _handleBatch(e,t){try{const r=await Promise.all(e.map(this._promiseHandle.bind(this)));return t?t(null,r):r}catch(e){if(t)return t(e);throw e}}_promiseHandle(e){return new Promise((t=>{this._handle(e,((e,r)=>{t(r)}))}))}async _handle(e,t){if(!e||Array.isArray(e)||"object"!=typeof e){const r=new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest,"Requests must be plain objects. Received: "+typeof e,{request:e});return t(r,{id:void 0,jsonrpc:"2.0",error:r})}if("string"!=typeof e.method){const r=new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest,"Must specify a string method. Received: "+typeof e.method,{request:e});return t(r,{id:e.id,jsonrpc:"2.0",error:r})}const r=Object.assign({},e),n={id:r.id,jsonrpc:r.jsonrpc};let o=null;try{await this._processRequest(r,n)}catch(e){o=e}return o&&(delete n.result,n.error||(n.error=s.serializeError(o))),t(o,n)}async _processRequest(e,t){const[r,n,o]=await i._runAllMiddleware(e,t,this._middleware);if(i._checkForCompletion(e,t,n),await i._runReturnHandlers(o),r)throw r}static async _runAllMiddleware(e,t,r){const n=[];let o=null,s=!1;for(const a of r)if([o,s]=await i._runMiddleware(e,t,a,n),s)break;return[o,s,n.reverse()]}static _runMiddleware(e,t,r,n){return new Promise((o=>{const i=e=>{const r=e||t.error;r&&(t.error=s.serializeError(r)),o([r,!0])},c=r=>{t.error?i(t.error):(r&&("function"!=typeof r&&i(new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${a(e)}`,{request:e})),n.push(r)),o([null,!1]))};try{r(e,t,c,i)}catch(e){i(e)}}))}static async _runReturnHandlers(e){for(const t of e)await new Promise(((e,r)=>{t((t=>t?r(t):e()))}))}static _checkForCompletion(e,t,r){if(!("result"in t)&&!("error"in t))throw new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:\n${a(e)}`,{request:e});if(!r)throw new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:\n${a(e)}`,{request:e})}}function a(e){return JSON.stringify(e,null,2)}e.exports.JsonRpcEngine=i})),t.register("iow5v",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0});var n=t("2XJVW");function o(e,t,r){try{Reflect.apply(e,t,r)}catch(e){setTimeout((()=>{throw e}))}}class s extends n.EventEmitter{emit(e,...t){let r="error"===e;const n=this._events;if(void 0!==n)r=r&&void 0===n.error;else if(!r)return!1;if(r){let e;if(t.length>0&&([e]=t),e instanceof Error)throw e;const r=new Error("Unhandled error."+(e?` (${e.message})`:""));throw r.context=e,r}const s=n[e];if(void 0===s)return!1;if("function"==typeof s)o(s,this,t);else{const e=s.length,r=function(e){const t=e.length,r=new Array(t);for(let n=0;n<t;n+=1)r[n]=e[n];return r}(s);for(let n=0;n<e;n+=1)o(r[n],this,t)}return!0}}e.exports.default=s})),t.register("2TNa5",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.getMessageFromCode=e.exports.serializeError=e.exports.EthereumProviderError=e.exports.EthereumRpcError=e.exports.ethErrors=e.exports.errorCodes=void 0;var n=t("9a5cn");Object.defineProperty(e.exports,"EthereumRpcError",{enumerable:!0,get:function(){return n.EthereumRpcError}}),Object.defineProperty(e.exports,"EthereumProviderError",{enumerable:!0,get:function(){return n.EthereumProviderError}});var o=t("1lV87");Object.defineProperty(e.exports,"serializeError",{enumerable:!0,get:function(){return o.serializeError}}),Object.defineProperty(e.exports,"getMessageFromCode",{enumerable:!0,get:function(){return o.getMessageFromCode}});var s=t("2UnZi");Object.defineProperty(e.exports,"ethErrors",{enumerable:!0,get:function(){return s.ethErrors}});var i=t("6lnYg");Object.defineProperty(e.exports,"errorCodes",{enumerable:!0,get:function(){return i.errorCodes}})})),t.register("9a5cn",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.EthereumProviderError=e.exports.EthereumRpcError=void 0;var n=t("ga9yD");class o extends Error{constructor(e,t,r){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string.');super(t),this.code=e,void 0!==r&&(this.data=r)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return n.default(this.serialize(),s,2)}}e.exports.EthereumRpcError=o;function s(e,t){if("[Circular]"!==t)return t}e.exports.EthereumProviderError=class extends o{constructor(e,t,r){if(n=e,!(Number.isInteger(n)&&n>=1e3&&n<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');var n;super(e,t,r)}}})),t.register("ga9yD",(function(e,t){e.exports=a,a.default=a,a.stable=d,a.stableStringify=d;var r="[...]",n="[Circular]",o=[],s=[];function i(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function a(e,t,r,n){var a;void 0===n&&(n=i()),u(e,"",0,[],void 0,0,n);try{a=0===s.length?JSON.stringify(e,t,r):JSON.stringify(e,f(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==o.length;){var c=o.pop();4===c.length?Object.defineProperty(c[0],c[1],c[3]):c[0][c[1]]=c[2]}}return a}function c(e,t,r,n){var i=Object.getOwnPropertyDescriptor(n,r);void 0!==i.get?i.configurable?(Object.defineProperty(n,r,{value:e}),o.push([n,r,t,i])):s.push([t,r,e]):(n[r]=e,o.push([n,r,t]))}function u(e,t,o,s,i,a,l){var d;if(a+=1,"object"==typeof e&&null!==e){for(d=0;d<s.length;d++)if(s[d]===e)return void c(n,e,t,i);if(void 0!==l.depthLimit&&a>l.depthLimit)return void c(r,e,t,i);if(void 0!==l.edgesLimit&&o+1>l.edgesLimit)return void c(r,e,t,i);if(s.push(e),Array.isArray(e))for(d=0;d<e.length;d++)u(e[d],d,d,s,e,a,l);else{var p=Object.keys(e);for(d=0;d<p.length;d++){var f=p[d];u(e[f],f,d,s,e,a,l)}}s.pop()}}function l(e,t){return e<t?-1:e>t?1:0}function d(e,t,r,n){void 0===n&&(n=i());var a,c=p(e,"",0,[],void 0,0,n)||e;try{a=0===s.length?JSON.stringify(c,t,r):JSON.stringify(c,f(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==o.length;){var u=o.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return a}function p(e,t,s,i,a,u,d){var f;if(u+=1,"object"==typeof e&&null!==e){for(f=0;f<i.length;f++)if(i[f]===e)return void c(n,e,t,a);try{if("function"==typeof e.toJSON)return}catch(e){return}if(void 0!==d.depthLimit&&u>d.depthLimit)return void c(r,e,t,a);if(void 0!==d.edgesLimit&&s+1>d.edgesLimit)return void c(r,e,t,a);if(i.push(e),Array.isArray(e))for(f=0;f<e.length;f++)p(e[f],f,f,i,e,u,d);else{var h={},m=Object.keys(e).sort(l);for(f=0;f<m.length;f++){var g=m[f];p(e[g],g,f,i,e,u,d),h[g]=e[g]}if(void 0===a)return h;o.push([a,t,e]),a[t]=h}i.pop()}}function f(e){return e=void 0!==e?e:function(e,t){return t},function(t,r){if(s.length>0)for(var n=0;n<s.length;n++){var o=s[n];if(o[1]===t&&o[0]===r){r=o[2],s.splice(n,1);break}}return e.call(this,t,r)}}})),t.register("1lV87",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.serializeError=e.exports.isValidCode=e.exports.getMessageFromCode=e.exports.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;var n=t("6lnYg"),o=t("9a5cn");const s=n.errorCodes.rpc.internal,i={code:s,message:a(s)};function a(t,r="Unspecified error message. This is a bug, please report it."){if(Number.isInteger(t)){const r=t.toString();if(d(n.errorValues,r))return n.errorValues[r].message;if(u(t))return e.exports.JSON_RPC_SERVER_ERROR_MESSAGE}return r}function c(e){if(!Number.isInteger(e))return!1;const t=e.toString();return!!n.errorValues[t]||!!u(e)}function u(e){return e>=-32099&&e<=-32e3}function l(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.assign({},e):e}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.",e.exports.getMessageFromCode=a,e.exports.isValidCode=c,e.exports.serializeError=function(e,{fallbackError:t=i,shouldIncludeStack:r=!1}={}){var n,s;if(!t||!Number.isInteger(t.code)||"string"!=typeof t.message)throw new Error("Must provide fallback error with integer number code and string message.");if(e instanceof o.EthereumRpcError)return e.serialize();const u={};if(e&&"object"==typeof e&&!Array.isArray(e)&&d(e,"code")&&c(e.code)){const t=e;u.code=t.code,t.message&&"string"==typeof t.message?(u.message=t.message,d(t,"data")&&(u.data=t.data)):(u.message=a(u.code),u.data={originalError:l(e)})}else{u.code=t.code;const r=null===(n=e)||void 0===n?void 0:n.message;u.message=r&&"string"==typeof r?r:t.message,u.data={originalError:l(e)}}const p=null===(s=e)||void 0===s?void 0:s.stack;return r&&e&&p&&"string"==typeof p&&(u.stack=p),u}})),t.register("6lnYg",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.errorValues=e.exports.errorCodes=void 0,e.exports.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}},e.exports.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}}})),t.register("2UnZi",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ethErrors=void 0;var n=t("9a5cn"),o=t("1lV87"),s=t("6lnYg");function i(e,t){const[r,s]=c(t);return new n.EthereumRpcError(e,r||o.getMessageFromCode(e),s)}function a(e,t){const[r,s]=c(t);return new n.EthereumProviderError(e,r||o.getMessageFromCode(e),s)}function c(e){if(e){if("string"==typeof e)return[e];if("object"==typeof e&&!Array.isArray(e)){const{message:t,data:r}=e;if(t&&"string"!=typeof t)throw new Error("Must specify string message.");return[t||void 0,r]}}return[]}e.exports.ethErrors={rpc:{parse:e=>i(s.errorCodes.rpc.parse,e),invalidRequest:e=>i(s.errorCodes.rpc.invalidRequest,e),invalidParams:e=>i(s.errorCodes.rpc.invalidParams,e),methodNotFound:e=>i(s.errorCodes.rpc.methodNotFound,e),internal:e=>i(s.errorCodes.rpc.internal,e),server:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:t}=e;if(!Number.isInteger(t)||t>-32005||t<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return i(t,e)},invalidInput:e=>i(s.errorCodes.rpc.invalidInput,e),resourceNotFound:e=>i(s.errorCodes.rpc.resourceNotFound,e),resourceUnavailable:e=>i(s.errorCodes.rpc.resourceUnavailable,e),transactionRejected:e=>i(s.errorCodes.rpc.transactionRejected,e),methodNotSupported:e=>i(s.errorCodes.rpc.methodNotSupported,e),limitExceeded:e=>i(s.errorCodes.rpc.limitExceeded,e)},provider:{userRejectedRequest:e=>a(s.errorCodes.provider.userRejectedRequest,e),unauthorized:e=>a(s.errorCodes.provider.unauthorized,e),unsupportedMethod:e=>a(s.errorCodes.provider.unsupportedMethod,e),disconnected:e=>a(s.errorCodes.provider.disconnected,e),chainDisconnected:e=>a(s.errorCodes.provider.chainDisconnected,e),custom:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:t,message:r,data:o}=e;if(!r||"string"!=typeof r)throw new Error('"message" must be a nonempty string');return new n.EthereumProviderError(t,r,o)}}}})),t.register("cYGHX",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.mergeMiddleware=void 0;var n=t("7VaQO");e.exports.mergeMiddleware=function(e){const t=new n.JsonRpcEngine;return e.forEach((e=>t.push(e))),t.asMiddleware()}})),t.register("b2r2y",(function(e,r){e.exports=t("fal0O")})),t.register("fal0O",(function(e,t){e.exports=function(e){return(t,r,n,o)=>{const s=e[t.method];return void 0===s?n():"function"==typeof s?s(t,r,n,o):(r.result=s,o())}}})),t.register("fPwaR",(function(e,r){var n=t("l2J8l"),o=t("6BdgK"),s=t("5fuIP"),i=t("g5WsN"),a=i.blockRefIsNumber,c=i.incrementHexInt,u=i.hexToInt,l=i.minBlockRef;i.bnToHex;e.exports=class extends s{constructor({provider:e,params:t}){super(),this.type="log",this.ethQuery=new n(e),this.params=Object.assign({fromBlock:"latest",toBlock:"latest",address:void 0,topics:[]},t),this.params.address&&(Array.isArray(this.params.address)||(this.params.address=[this.params.address]),this.params.address=this.params.address.map((e=>e.toLowerCase())))}async initialize({currentBlock:e}){let t=this.params.fromBlock;["latest","pending"].includes(t)&&(t=e),"earliest"===t&&(t="0x0"),this.params.fromBlock=t;const r=l(this.params.toBlock,e),n=Object.assign({},this.params,{toBlock:r}),o=await this._fetchLogs(n);this.addInitialResults(o)}async update({oldBlock:e,newBlock:t}){const r=t;let n;n=e?c(e):t;const o=Object.assign({},this.params,{fromBlock:n,toBlock:r}),s=(await this._fetchLogs(o)).filter((e=>this.matchLog(e)));this.addResults(s)}async _fetchLogs(e){return await o((t=>this.ethQuery.getLogs(e,t)))()}matchLog(e){if(u(this.params.fromBlock)>=u(e.blockNumber))return!1;if(a(this.params.toBlock)&&u(this.params.toBlock)<=u(e.blockNumber))return!1;const t=e.address&&e.address.toLowerCase();if(this.params.address&&t&&!this.params.address.includes(t))return!1;return this.params.topics.every(((t,r)=>{let n=e.topics[r];if(!n)return!1;n=n.toLowerCase();let o=Array.isArray(t)?t:[t];if(o.includes(null))return!0;o=o.map((e=>e.toLowerCase()));return o.includes(n)}))}}})),t.register("6BdgK",(function(e,t){const r=(e,t,r,n)=>function(...o){return new(0,t.promiseModule)(((s,i)=>{t.multiArgs?o.push(((...e)=>{t.errorFirst?e[0]?i(e):(e.shift(),s(e)):s(e)})):t.errorFirst?o.push(((e,t)=>{e?i(e):s(t)})):o.push(s);const a=this===r?n:this;Reflect.apply(e,a,o)}))},n=new WeakMap;e.exports=(e,t)=>{t={exclude:[/.+(?:Sync|Stream)$/],errorFirst:!0,promiseModule:Promise,...t};const o=typeof e;if(null===e||"object"!==o&&"function"!==o)throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null===e?"null":o}\``);const s=new WeakMap,i=new Proxy(e,{apply(e,n,o){const a=s.get(e);if(a)return Reflect.apply(a,n,o);const c=t.excludeMain?e:r(e,t,i,e);return s.set(e,c),Reflect.apply(c,n,o)},get(e,o){const a=e[o];if(!((e,r)=>{let o=n.get(e);if(o||(o={},n.set(e,o)),r in o)return o[r];const s=e=>"string"==typeof e||"symbol"==typeof r?r===e:e.test(r),i=Reflect.getOwnPropertyDescriptor(e,r),a=void 0===i||i.writable||i.configurable,c=(t.include?t.include.some(s):!t.exclude.some(s))&&a;return o[r]=c,c})(e,o)||a===Function.prototype[o])return a;const c=s.get(a);if(c)return c;if("function"==typeof a){const n=r(a,t,i,e);return s.set(a,n),n}return a}});return i}})),t.register("5fuIP",(function(e,r){var n=t("bkg1a");e.exports=class extends n{constructor(){super(),this.allResults=[]}async update(){throw new Error("BaseFilterWithHistory - no update method specified")}addResults(e){this.allResults=this.allResults.concat(e),super.addResults(e)}addInitialResults(e){this.allResults=this.allResults.concat(e),super.addInitialResults(e)}getAllResults(){return this.allResults}}})),t.register("bkg1a",(function(e,r){var n=t("iow5v").default;e.exports=class extends n{constructor(){super(),this.updates=[]}async initialize(){}async update(){throw new Error("BaseFilter - no update method specified")}addResults(e){this.updates=this.updates.concat(e),e.forEach((e=>this.emit("update",e)))}addInitialResults(e){}getChangesAndClear(){const e=this.updates;return this.updates=[],e}}})),t.register("g5WsN",(function(e,t){function r(e){return e.sort(((e,t)=>"latest"===e||"earliest"===t?1:"latest"===t||"earliest"===e?-1:n(e)-n(t)))}function n(e){return null==e?e:Number.parseInt(e,16)}function o(e){if(null==e)return e;let t=e.toString(16);return t.length%2&&(t="0"+t),"0x"+t}function s(){return Math.floor(16*Math.random()).toString(16)}e.exports={minBlockRef:function(...e){return r(e)[0]},maxBlockRef:function(...e){const t=r(e);return t[t.length-1]},sortBlockRefs:r,bnToHex:function(e){return"0x"+e.toString(16)},blockRefIsNumber:function(e){return e&&!["earliest","latest","pending"].includes(e)},hexToInt:n,incrementHexInt:function(e){if(null==e)return e;return o(n(e)+1)},intToHex:o,unsafeRandomBytes:function(e){let t="0x";for(let r=0;r<e;r++)t+=s(),t+=s();return t}}})),t.register("8Fcrf",(function(e,r){var n=t("bkg1a"),o=t("e9t8M"),s=t("g5WsN").incrementHexInt;e.exports=class extends n{constructor({provider:e,params:t}){super(),this.type="block",this.provider=e}async update({oldBlock:e,newBlock:t}){const r=t,n=s(e),i=(await o({provider:this.provider,fromBlock:n,toBlock:r})).map((e=>e.hash));this.addResults(i)}}})),t.register("e9t8M",(function(e,t){function r(e){return null==e?e:Number.parseInt(e,16)}function n(e){if(null==e)return e;return"0x"+e.toString(16)}e.exports=async function({provider:e,fromBlock:t,toBlock:o}){t||(t=o);const s=r(t),i=r(o),a=Array(i-s+1).fill().map(((e,t)=>s+t)).map(n);return await Promise.all(a.map((t=>function(e,t,r){return new Promise(((n,o)=>{e.sendAsync({id:1,jsonrpc:"2.0",method:t,params:r},((e,t)=>{if(e)return o(e);n(t.result)}))}))}(e,"eth_getBlockByNumber",[t,!1]))))}})),t.register("9Ip2w",(function(e,r){var n=t("bkg1a"),o=t("e9t8M"),s=t("g5WsN").incrementHexInt;e.exports=class extends n{constructor({provider:e}){super(),this.type="tx",this.provider=e}async update({oldBlock:e}){const t=e,r=s(e),n=await o({provider:this.provider,fromBlock:r,toBlock:t}),i=[];for(const e of n)i.push(...e.transactions);this.addResults(i)}}})),t.register("5xTI9",(function(e,r){var n=t("iow5v").default,o=t("b2r2y"),s=t("5Y2aI").createAsyncMiddleware,i=t("hhTb3"),a=t("g5WsN"),c=a.unsafeRandomBytes,u=a.incrementHexInt,l=t("e9t8M");function d(e){return{hash:e.hash,parentHash:e.parentHash,sha3Uncles:e.sha3Uncles,miner:e.miner,stateRoot:e.stateRoot,transactionsRoot:e.transactionsRoot,receiptsRoot:e.receiptsRoot,logsBloom:e.logsBloom,difficulty:e.difficulty,number:e.number,gasLimit:e.gasLimit,gasUsed:e.gasUsed,nonce:e.nonce,mixHash:e.mixHash,timestamp:e.timestamp,extraData:e.extraData}}e.exports=function({blockTracker:e,provider:t}){const r={},a=i({blockTracker:e,provider:t});let p=!1;const f=new n,h=o({eth_subscribe:s((async function(n,o){if(p)throw new Error("SubscriptionManager - attempting to use after destroying");const s=n.params[0],i=c(16);let f;switch(s){case"newHeads":f=h({subId:i});break;case"logs":const e=n.params[1];f=g({subId:i,filter:await a.newLogFilter(e)});break;default:throw new Error(`SubscriptionManager - unsupported subscription type "${s}"`)}return r[i]=f,void(o.result=i);function h({subId:r}){const n={type:s,destroy:async()=>{e.removeListener("sync",n.update)},update:async({oldBlock:e,newBlock:n})=>{const o=n,s=u(e);(await l({provider:t,fromBlock:s,toBlock:o})).map(d).forEach((e=>{m(r,e)}))}};return e.on("sync",n.update),n}function g({subId:e,filter:t}){t.on("update",(t=>m(e,t)));return{type:s,destroy:async()=>await a.uninstallFilter(t.idHex)}}})),eth_unsubscribe:s((async function(e,t){if(p)throw new Error("SubscriptionManager - attempting to use after destroying");const n=e.params[0],o=r[n];if(!o)return void(t.result=!1);delete r[n],await o.destroy(),t.result=!0}))});function m(e,t){f.emit("notification",{jsonrpc:"2.0",method:"eth_subscription",params:{subscription:e,result:t}})}return h.destroy=function(){f.removeAllListeners();for(const e in r)r[e].destroy(),delete r[e];p=!0},{events:f,middleware:h}}}));
//# sourceMappingURL=esm.410de709.js.map
