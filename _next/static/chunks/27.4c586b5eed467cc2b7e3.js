(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0bqm":function(e,n,t){"use strict";t.r(n),t.d(n,"URI_AVAILABLE",(function(){return l})),t.d(n,"UserRejectedRequestError",(function(){return h})),t.d(n,"WalletConnectConnector",(function(){return f}));var r=t("NEbA");function o(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function u(e,n,t){return(u=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&i(o,t.prototype),o}).apply(null,arguments)}function a(e){var n="function"===typeof Map?new Map:void 0;return(a=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return u(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l="URI_AVAILABLE",h=function(e){function n(){var n;return(n=e.call(this)||this).name=n.constructor.name,n.message="The user rejected the request.",n}return o(n,e),n}(a(Error));function d(e){var n=e.supportedChainIds,t=e.rpc;return n||(t?Object.keys(t).map((function(e){return Number(e)})):void 0)}var f=function(e){function n(n){var t;return(t=e.call(this,{supportedChainIds:d(n)})||this).config=n,t.handleChainChanged=t.handleChainChanged.bind(s(t)),t.handleAccountsChanged=t.handleAccountsChanged.bind(s(t)),t.handleDisconnect=t.handleDisconnect.bind(s(t)),t}o(n,e);var r=n.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e})},r.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},r.handleDisconnect=function(){this.emitDeactivate()},r.activate=function(){try{var e=this,n=function(){return e.walletConnectProvider.on("chainChanged",e.handleChainChanged),e.walletConnectProvider.on("accountsChanged",e.handleAccountsChanged),e.walletConnectProvider.on("disconnect",e.handleDisconnect),Promise.resolve(e.walletConnectProvider.enable().then((function(e){return e[0]})).catch((function(e){if("User closed modal"===e.message)throw new h;throw e}))).then((function(n){return{provider:e.walletConnectProvider,account:n}}))},r=function(){if(!e.walletConnectProvider)return Promise.resolve(t.e(18).then(t.bind(null,"Lk1n")).then((function(e){var n;return null!=(n=null==e?void 0:e.default)?n:e}))).then((function(n){e.walletConnectProvider=new n(e.config)}))}();return Promise.resolve(r&&r.then?r.then(n):n())}catch(o){return Promise.reject(o)}},r.getProvider=function(){try{return Promise.resolve(this.walletConnectProvider)}catch(e){return Promise.reject(e)}},r.getChainId=function(){try{return Promise.resolve(this.walletConnectProvider.chainId)}catch(e){return Promise.reject(e)}},r.getAccount=function(){try{return Promise.resolve(this.walletConnectProvider.accounts).then((function(e){return e[0]}))}catch(e){return Promise.reject(e)}},r.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider.disconnect())},r.close=function(){try{return this.emitDeactivate(),Promise.resolve()}catch(e){return Promise.reject(e)}},n}(r.a)}}]);