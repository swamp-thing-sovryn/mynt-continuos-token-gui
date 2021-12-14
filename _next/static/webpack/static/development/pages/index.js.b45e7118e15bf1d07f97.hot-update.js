webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/known-contracts.js":
/*!********************************!*\
  !*** ./lib/known-contracts.js ***!
  \********************************/
/*! exports provided: getKnownAbi, getKnownContract, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnownAbi", function() { return getKnownAbi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnownContract", function() { return getKnownContract; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./lib/environment.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_environment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abi_token_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abi/token.json */ "./lib/abi/token.json");
var _abi_token_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./abi/token.json */ "./lib/abi/token.json", 1);
/* harmony import */ var _abi_bancor_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abi/bancor.json */ "./lib/abi/bancor.json");
var _abi_bancor_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./abi/bancor.json */ "./lib/abi/bancor.json", 1);
/* harmony import */ var _abi_fundraising_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abi/fundraising.json */ "./lib/abi/fundraising.json");
var _abi_fundraising_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./abi/fundraising.json */ "./lib/abi/fundraising.json", 1);
/* harmony import */ var _abi_marketMaker_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi/marketMaker.json */ "./lib/abi/marketMaker.json");
var _abi_marketMaker_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./abi/marketMaker.json */ "./lib/abi/marketMaker.json", 1);





var KNOWN_CONTRACTS_BY_ENV = new Map([['1', {
  BANCOR_FORMULA: '0x274Aac49b63F07Bf6998964aD20020b18383a09D',
  BONDING_CURVE_TREASURY: '0xEc0DD1579551964703246BeCfbF199C27Cb84485',
  FUNDRAISING: '0x0b4D742d52EE0C4391439f80822B26fDF1ad6Ee7',
  MARKET_MAKER: '0x5D9DbF55aF65498FaA84BDD4dDe37f7F3f8c7af1',
  COLLATERAL: '0x960b236A07cf122663c4303350609A66A7B288C0',
  BONDED: '0xcD62b1C403fa761BAadFC74C525ce2B51780b184'
}], ['4', {
  BANCOR_FORMULA: '0x9ac140F489Df1481C20FeB318f09b29A4f744915',
  BONDING_CURVE_TREASURY: '0xEdf4C05D31ea053C69E065b2F6744DA8B76258b3',
  FUNDRAISING: '0x8Ab84819C08355B029CDa21457192d0d249bCC0d',
  MARKET_MAKER: '0xb9aB1Cc6AdC7c3bacc4ea26235838497abe865e0',
  COLLATERAL: '0x8cf8196c14A654dc8Aceb3cbb3dDdfd16C2b652D',
  BONDED: '0x1FAB7d0D028ded72195322998003F6e82cF4cFdB'
}], ['31337', {
  BANCOR_FORMULA: '0x1b25996DEa9fAAd22F361b503175C56847A41BAD',
  BONDING_CURVE_TREASURY: '0xb27fc201B41a67EeD2488534f80fdb49261afbC1',
  FUNDRAISING: '0xf7115Ac4a90A86834E107bbc249ed64720D7d091',
  MARKET_MAKER: '0xbFa00c27d85628082c1A5aD52F09aB3F26a0B576',
  COLLATERAL: '0xF6892cf06F003a536fBaEB383c84095F28857405',
  BONDED: '0x9f4904fa2612f3b6b61B0b7f75Ae27C1fCB7aADd'
}], ['31', {
  BANCOR_FORMULA: '0xFE09Df5d6ddc053c4d1273Cf8F7eD1B02A0D24C8',
  BONDING_CURVE_TREASURY: '0xc70882018136aaC283D287302932da56371d6514',
  FUNDRAISING: '0x6F62D2F571BcE7187CdFDD4b1E5E53cfD7d14dd2',
  MARKET_MAKER: '0xf75170ce8d4060b8D5fc24E996FA00A94bb8A232',
  COLLATERAL: '0x6a9A07972D07e58F0daf5122d11E069288A375fb',
  BONDED: '0x139483e22575826183F5b56dd242f8f2C1AEf327'
}], ['30', {
  BANCOR_FORMULA: '0x6cBb8d512389768d9809BcB3b76d71251a6769Da',
  BONDING_CURVE_TREASURY: '0x6FB7A6A5Bd3f800130443AE202A58Fdbe11B8D5C',
  FUNDRAISING: '0x6FB7A6A5Bd3f800130443AE202A58Fdbe11B8D5C',
  MARKET_MAKER: '0x722935fF8A99D801D802bb3EE528408C11C18656',
  COLLATERAL: '0xefc78fc7d48b64958315949279ba181c2114abbd',
  BONDED: '0x2e6B1d146064613E8f521Eb3c6e65070af964EbB'
}]]);
var ABIS = new Map([['COLLATERAL', _abi_token_json__WEBPACK_IMPORTED_MODULE_1__], ['BONDED', _abi_token_json__WEBPACK_IMPORTED_MODULE_1__], ['BANCOR_FORMULA', _abi_bancor_json__WEBPACK_IMPORTED_MODULE_2__], ['FUNDRAISING', _abi_fundraising_json__WEBPACK_IMPORTED_MODULE_3__], ['MARKET_MAKER', _abi_marketMaker_json__WEBPACK_IMPORTED_MODULE_4__]]);
function getKnownAbi(name) {
  return ABIS.get(name);
}
function getKnownContract(name) {
  var knownContracts = KNOWN_CONTRACTS_BY_ENV.get(_environment__WEBPACK_IMPORTED_MODULE_0___default()('CHAIN_ID')) || {};
  return [knownContracts[name] || null, getKnownAbi(name) || []];
}
/* harmony default export */ __webpack_exports__["default"] = (KNOWN_CONTRACTS_BY_ENV);

/***/ })

})
//# sourceMappingURL=index.js.b45e7118e15bf1d07f97.hot-update.js.map