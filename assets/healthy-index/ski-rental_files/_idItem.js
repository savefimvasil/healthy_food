(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages/_lang/news/_idItem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/news/_idItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Header/Header */ "./components/Header/Header.vue");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Footer/Footer */ "./components/Footer/Footer.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "idItem",
  components: {
    Footer: _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
    Header: _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['pageData'],
  data: function data() {
    return {
      ad: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    var id = this.$route.params.idItem;
    console.log(this.$route);
    var url = "http://localhost:4000/news/edit/".concat(id);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (response) {
      _this.ad = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".news--item[data-v-21094b6c] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.news--item .container[data-v-21094b6c] {\n    padding-top: 100px;\n}\n.news--item .container h1[data-v-21094b6c] {\n      text-align: center;\n}\n", "",{"version":3,"sources":["/Users/savchinefim/WebstormProjects/ski-rent/pages/_lang/news/_idItem.vue"],"names":[],"mappings":"AAuDA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAAA;AAJhC;IAMI,kBAAkB;AAAA;AANtB;MAQM,kBAAkB;AAAA","file":"_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.news--item{\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  .container{\n    padding-top: 100px;\n    h1{\n      text-align: center;\n    }\n  }\n}\n"],"sourceRoot":""}]);



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=template&id=21094b6c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/news/_idItem.vue?vue&type=template&id=21094b6c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "news--item" }, [
    _c("div", { staticClass: "container" }, [
      _c("h1", [
        _vm._v(
          "\n      " +
            _vm._s(
              _vm.$route.params.lang === "ru"
                ? _vm.ad.titleRU
                : _vm.$route.params.lang === "ua"
                ? _vm.ad.titleUA
                : _vm.ad.titleRU
            ) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      " +
            _vm._s(
              _vm.$route.params.lang === "ru"
                ? _vm.ad.descriptionRU
                : _vm.$route.params.lang === "ua"
                ? _vm.ad.descriptionUA
                : _vm.ad.descriptionRU
            ) +
            "\n    "
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--9-oneOf-1-3!../../../node_modules/vue-loader/lib??vue-loader-options!./_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("40c68b74", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--9-oneOf-1-3!../../../node_modules/vue-loader/lib??vue-loader-options!./_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--9-oneOf-1-3!../../../node_modules/vue-loader/lib??vue-loader-options!./_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./pages/_lang/news/_idItem.vue":
/*!**************************************!*\
  !*** ./pages/_lang/news/_idItem.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_idItem.vue?vue&type=template&id=21094b6c&scoped=true& */ "./pages/_lang/news/_idItem.vue?vue&type=template&id=21094b6c&scoped=true&");
/* harmony import */ var _idItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_idItem.vue?vue&type=script&lang=js& */ "./pages/_lang/news/_idItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _idItem_vue_vue_type_style_index_0_id_21094b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true& */ "./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _idItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21094b6c",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('21094b6c', component.options)
    } else {
      api.reload('21094b6c', component.options)
    }
    module.hot.accept(/*! ./_idItem.vue?vue&type=template&id=21094b6c&scoped=true& */ "./pages/_lang/news/_idItem.vue?vue&type=template&id=21094b6c&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_idItem.vue?vue&type=template&id=21094b6c&scoped=true& */ "./pages/_lang/news/_idItem.vue?vue&type=template&id=21094b6c&scoped=true&");
(function () {
      api.rerender('21094b6c', {
        render: _idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "pages/_lang/news/_idItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/_lang/news/_idItem.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./pages/_lang/news/_idItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./_idItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_style_index_0_id_21094b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--9-oneOf-1-3!../../../node_modules/vue-loader/lib??vue-loader-options!./_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=style&index=0&id=21094b6c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_style_index_0_id_21094b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_style_index_0_id_21094b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_style_index_0_id_21094b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_style_index_0_id_21094b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_style_index_0_id_21094b6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/_lang/news/_idItem.vue?vue&type=template&id=21094b6c&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./pages/_lang/news/_idItem.vue?vue&type=template&id=21094b6c&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./_idItem.vue?vue&type=template&id=21094b6c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/_lang/news/_idItem.vue?vue&type=template&id=21094b6c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_idItem_vue_vue_type_template_id_21094b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);