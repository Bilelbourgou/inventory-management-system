"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["accounting_v2_tax_report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TaxReportV2",
  metaInfo: {
    title: "Tax Summary Report"
  },
  data: function data() {
    return {
      data: {
        sales: 0,
        sale_returns: 0,
        taxable_sales: 0,
        output_tax: 0,
        purchases: 0,
        purchase_returns: 0,
        taxable_purchases: 0,
        input_tax: 0,
        net_tax: 0
      },
      filters: {
        from: "",
        to: ""
      },
      isLoading: false,
      error: null
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions", "currentUser"])),
  created: function created() {
    this.initializeDates();
    this.fetch();
  },
  methods: {
    initializeDates: function initializeDates() {
      // Set default date range to current month
      var now = new Date();
      var firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      var lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      this.filters.from = firstDay.toISOString().split('T')[0];
      this.filters.to = lastDay.toISOString().split('T')[0];
    },
    fetch: function fetch() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _e$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.isLoading = true;
              _this.error = null;
              _context.p = 1;
              _context.n = 2;
              return axios.get("/accounting/v2/reports/tax-summary", {
                params: _this.filters
              });
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              if (data) {
                _this.data = {
                  sales: parseFloat(data.sales || 0),
                  sale_returns: parseFloat(data.sale_returns || 0),
                  taxable_sales: parseFloat(data.taxable_sales || 0),
                  output_tax: parseFloat(data.output_tax || 0),
                  purchases: parseFloat(data.purchases || 0),
                  purchase_returns: parseFloat(data.purchase_returns || 0),
                  taxable_purchases: parseFloat(data.taxable_purchases || 0),
                  input_tax: parseFloat(data.input_tax || 0),
                  net_tax: parseFloat(data.net_tax || 0)
                };
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error("Tax Summary Error:", _t);
              _this.error = ((_e$response = _t.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || _this.$t('Failed_Load_Tax_Summary');

              // Show toast notification
              _this.$root.$bvToast.toast(_this.error, {
                title: _this.$t('Error'),
                variant: 'danger',
                solid: true
              });
            case 4:
              _context.p = 4;
              _this.isLoading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    toMoney: function toMoney(v) {
      var n = parseFloat(v || 0);
      return n.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=template&id=7cae893e&scoped=true"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=template&id=7cae893e&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-content"
  }, [_c('breadcumb', {
    attrs: {
      "page": _vm.$t('Tax_Summary_Report'),
      "folder": _vm.$t('Reports')
    }
  }), _vm._v(" "), _vm.isLoading ? _c('div', {
    staticClass: "text-center py-5"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _vm.error ? _c('div', {
    staticClass: "alert alert-danger",
    attrs: {
      "role": "alert"
    }
  }, [_c('i', {
    staticClass: "i-Close-Window"
  }), _vm._v(" " + _vm._s(_vm.error) + "\n  ")]) : _vm._e(), _vm._v(" "), !_vm.isLoading ? [_c('div', {
    staticClass: "card p-3 mb-3"
  }, [_c('div', {
    staticClass: "row align-items-end"
  }, [_c('div', {
    staticClass: "col-md-4 mb-2"
  }, [_c('label', {
    staticClass: "small text-muted mb-1"
  }, [_vm._v(_vm._s(_vm.$t('From')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.from,
      expression: "filters.from"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.filters.from
    },
    on: {
      "change": _vm.fetch,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "from", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 mb-2"
  }, [_c('label', {
    staticClass: "small text-muted mb-1"
  }, [_vm._v(_vm._s(_vm.$t('To')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.to,
      expression: "filters.to"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.filters.to
    },
    on: {
      "change": _vm.fetch,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "to", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 mb-2 text-right"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "disabled": _vm.isLoading
    },
    on: {
      "click": _vm.fetch
    }
  }, [_c('i', {
    staticClass: "i-Reload"
  }), _vm._v(" " + _vm._s(_vm.$t('Refresh')) + "\n          ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card p-3 mb-3"
  }, [_c('h6', {
    staticClass: "mb-3 text-primary"
  }, [_vm._v(_vm._s(_vm.$t('Sales_Tax')) + " (" + _vm._s(_vm.$t('Output_Tax')) + ")")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between mb-2 text-muted small"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Total_Sales')))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.toMoney(_vm.data.sales)))])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between mb-2 text-muted small"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Sale_Returns')))]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("- " + _vm._s(_vm.toMoney(_vm.data.sale_returns)))])]), _vm._v(" "), _c('hr', {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between mb-2"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Net_Sales')))]), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.toMoney(_vm.data.taxable_sales)))])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Output_Tax')))]), _vm._v(" "), _c('strong', {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.toMoney(_vm.data.output_tax)))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card p-3 mb-3"
  }, [_c('h6', {
    staticClass: "mb-3 text-primary"
  }, [_vm._v(_vm._s(_vm.$t('Purchase_Tax')) + " (" + _vm._s(_vm.$t('Input_Tax')) + ")")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between mb-2 text-muted small"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Total_Purchases')))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.toMoney(_vm.data.purchases)))])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between mb-2 text-muted small"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Purchase_Returns')))]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("- " + _vm._s(_vm.toMoney(_vm.data.purchase_returns)))])]), _vm._v(" "), _c('hr', {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between mb-2"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Net_Purchases')))]), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.toMoney(_vm.data.taxable_purchases)))])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Input_Tax')))]), _vm._v(" "), _c('strong', {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.toMoney(_vm.data.input_tax)))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card p-3",
    "class": _vm.data.net_tax >= 0 ? 'border-warning' : 'border-success'
  }, [_c('div', {
    staticClass: "d-flex justify-content-between"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('Net_Tax')))]), _vm._v(" "), _c('span', {
    "class": _vm.data.net_tax >= 0 ? 'text-warning' : 'text-success'
  }, [_vm._v("\n          " + _vm._s(_vm.toMoney(_vm.data.net_tax)) + "\n        ")])]), _vm._v(" "), _c('small', {
    staticClass: "text-muted mt-2 d-block"
  }, [_vm._v("\n        " + _vm._s(_vm.data.net_tax >= 0 ? _vm.$t('Tax_Payable') : _vm.$t('Tax_Refund')) + "\n      ")])])] : _vm._e()], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "spinner-border text-primary",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]);
}];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue"
/*!****************************************************************************!*\
  !*** ./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tax_report_vue_vue_type_template_id_7cae893e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax_report.vue?vue&type=template&id=7cae893e&scoped=true */ "./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=template&id=7cae893e&scoped=true");
/* harmony import */ var _tax_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax_report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tax_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _tax_report_vue_vue_type_template_id_7cae893e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _tax_report_vue_vue_type_template_id_7cae893e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7cae893e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/accounting_v2/reports/tax_report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=script&lang=js"
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tax_report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=template&id=7cae893e&scoped=true"
/*!**********************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=template&id=7cae893e&scoped=true ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_report_vue_vue_type_template_id_7cae893e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_report_vue_vue_type_template_id_7cae893e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_report_vue_vue_type_template_id_7cae893e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tax_report.vue?vue&type=template&id=7cae893e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/reports/tax_report.vue?vue&type=template&id=7cae893e&scoped=true");


/***/ }

}]);