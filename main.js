/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/fetch-suggestion-list.ts":
/*!******************************************!*\
  !*** ./src/api/fetch-suggestion-list.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchSuggestionList": () => (/* binding */ fetchSuggestionList)
/* harmony export */ });
const API_END_POINT = "https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front";

const getSuggestionListPath = word => `${API_END_POINT}/autocomplete?value=${word}`;

const fetchSuggestionList = async word => {
  try {
    const res = await fetch(getSuggestionListPath(word));

    if (!res.ok) {
      throw new Error("Fail to call api");
    }

    return res.json();
  } catch {
    return [];
  }
};

/***/ }),

/***/ "./src/common/Component.ts":
/*!*********************************!*\
  !*** ./src/common/Component.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
class Component {
  constructor($target, props, state) {
    this.isMounted = false;
    this.$target = $target;
    this.props = props;
    this.state = state;
    this.componentInit();
    this.render();
    this.isMounted = true;
  }

  componentInit() {}

  componentDidMount() {}

  componentDidUpdate() {}

  setState(newState) {}

  getInnerHTML() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.getInnerHTML();

    if (this.isMounted) {
      this.componentDidUpdate();
    } else {
      this.componentDidMount();
    }
  }

}

/***/ }),

/***/ "./src/common/constant.ts":
/*!********************************!*\
  !*** ./src/common/constant.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID": () => (/* binding */ ID)
/* harmony export */ });
const ID = Object.freeze({
  SearchBoxComp: "search-box-component",
  SuggestionListComp: "suggestion-list-component",
  SearchResultComp: "search-result-component"
});

/***/ }),

/***/ "./src/common/debounce.ts":
/*!********************************!*\
  !*** ./src/common/debounce.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
const debounce = (fn, ms = 300) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), ms);
  };
};

/***/ }),

/***/ "./src/common/dom.ts":
/*!***************************!*\
  !*** ./src/common/dom.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "classToQuery": () => (/* binding */ classToQuery),
/* harmony export */   "idToQuery": () => (/* binding */ idToQuery)
/* harmony export */ });
function $(query, target) {
  return (target !== null && target !== void 0 ? target : document).querySelector(query);
}
function $$(query, target) {
  return Array.from((target !== null && target !== void 0 ? target : document).querySelectorAll(query), $el => $el);
}
function idToQuery(id) {
  return `#${id}`;
}
function classToQuery(className) {
  return `.${className}`;
}

/***/ }),

/***/ "./src/common/sessionStorage.ts":
/*!**************************************!*\
  !*** ./src/common/sessionStorage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItem": () => (/* binding */ getItem),
/* harmony export */   "hasItem": () => (/* binding */ hasItem),
/* harmony export */   "setItem": () => (/* binding */ setItem)
/* harmony export */ });
const sessionStorage = window.sessionStorage;
function getItem(key) {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
function setItem(key, value) {
  return sessionStorage.setItem(key, JSON.stringify(value));
}
function hasItem(key) {
  return getItem(key) !== null;
}

/***/ }),

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./src/common/Component.ts");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ "./src/components/SearchBox.ts");
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResult */ "./src/components/SearchResult.ts");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constant */ "./src/common/constant.ts");
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/dom */ "./src/common/dom.ts");





class App extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor($target) {
    super($target);
  }

  componentDidMount() {
    const onSubmitInput = content => {
      var _this$searchResultCom;

      (_this$searchResultCom = this.searchResultComp) === null || _this$searchResultCom === void 0 ? void 0 : _this$searchResultCom.setState({
        content
      });
    };

    this.searchBoxComp = new _SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"]((0,_common_dom__WEBPACK_IMPORTED_MODULE_4__.$)((0,_common_dom__WEBPACK_IMPORTED_MODULE_4__.idToQuery)(_common_constant__WEBPACK_IMPORTED_MODULE_3__.ID.SearchBoxComp), this.$target), {
      onSubmitInput
    });
    this.searchResultComp = new _SearchResult__WEBPACK_IMPORTED_MODULE_2__["default"]((0,_common_dom__WEBPACK_IMPORTED_MODULE_4__.$)((0,_common_dom__WEBPACK_IMPORTED_MODULE_4__.idToQuery)(_common_constant__WEBPACK_IMPORTED_MODULE_3__.ID.SearchResultComp), this.$target));
  }

  getInnerHTML() {
    return `
            <section id="${_common_constant__WEBPACK_IMPORTED_MODULE_3__.ID.SearchBoxComp}"  class="d-flex justify-center mt-4 relative"></section>
            <section id="${_common_constant__WEBPACK_IMPORTED_MODULE_3__.ID.SearchResultComp}" class="d-flex justify-center mt-20"></section>
      `;
  }

}

/***/ }),

/***/ "./src/components/SearchBox.ts":
/*!*************************************!*\
  !*** ./src/components/SearchBox.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./src/common/Component.ts");
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/search.svg */ "./src/icons/search.svg");
/* harmony import */ var _icons_clear_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/clear.svg */ "./src/icons/clear.svg");
/* harmony import */ var _SuggestionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuggestionList */ "./src/components/SuggestionList.ts");
/* harmony import */ var _common_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/debounce */ "./src/common/debounce.ts");
/* harmony import */ var _api_fetch_suggestion_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/fetch-suggestion-list */ "./src/api/fetch-suggestion-list.ts");
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/dom */ "./src/common/dom.ts");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/constant */ "./src/common/constant.ts");
/* harmony import */ var _common_sessionStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/sessionStorage */ "./src/common/sessionStorage.ts");









class SearchBox extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor($target, props) {
    super($target, props);
  }

  componentInit() {
    this.bindEvents();
  }

  async getSuggestionList(word) {
    if ((0,_common_sessionStorage__WEBPACK_IMPORTED_MODULE_8__.hasItem)(word)) {
      return (0,_common_sessionStorage__WEBPACK_IMPORTED_MODULE_8__.getItem)(word);
    } else {
      const suggestionList = await (0,_api_fetch_suggestion_list__WEBPACK_IMPORTED_MODULE_5__.fetchSuggestionList)(word);
      suggestionList.length && (0,_common_sessionStorage__WEBPACK_IMPORTED_MODULE_8__.setItem)(word, suggestionList);
      return suggestionList;
    }
  }

  clearInputValue() {
    var _this$suggestionListC;

    const $input = (0,_common_dom__WEBPACK_IMPORTED_MODULE_6__.$)((0,_common_dom__WEBPACK_IMPORTED_MODULE_6__.classToQuery)("search-input"), this.$target);
    $input.value = "";
    $input.focus();
    (_this$suggestionListC = this.suggestionListComp) === null || _this$suggestionListC === void 0 ? void 0 : _this$suggestionListC.hide();
  }

  bindEvents() {
    this.$target.addEventListener("keydown", e => {
      var _this$suggestionListC2;

      if (e.isComposing) {
        return; //조합문자가 아님에도 조합문자라고 인식하는 버그가 있어 처리함.
      }

      (_this$suggestionListC2 = this.suggestionListComp) === null || _this$suggestionListC2 === void 0 ? void 0 : _this$suggestionListC2.show();
      const {
        key
      } = e;

      if (key === "ArrowUp") {
        var _this$suggestionListC3;

        (_this$suggestionListC3 = this.suggestionListComp) === null || _this$suggestionListC3 === void 0 ? void 0 : _this$suggestionListC3.moveCursorUp();
      } else if (key === "ArrowDown") {
        var _this$suggestionListC4;

        (_this$suggestionListC4 = this.suggestionListComp) === null || _this$suggestionListC4 === void 0 ? void 0 : _this$suggestionListC4.moveCursorDown();
      } else if (key == "Backspace") {
        var _this$suggestionListC5;

        (_this$suggestionListC5 = this.suggestionListComp) === null || _this$suggestionListC5 === void 0 ? void 0 : _this$suggestionListC5.setState({
          cursor: 0
        });
      }
    });
    this.$target.addEventListener("keydown", (0,_common_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce)(async e => {
      const {
        value
      } = e.target;

      if (value.trim()) {
        var _this$suggestionListC6;

        const suggestionList = await this.getSuggestionList(value);
        (_this$suggestionListC6 = this.suggestionListComp) === null || _this$suggestionListC6 === void 0 ? void 0 : _this$suggestionListC6.setState({
          suggestionList
        });
      } else {
        var _this$suggestionListC7;

        (_this$suggestionListC7 = this.suggestionListComp) === null || _this$suggestionListC7 === void 0 ? void 0 : _this$suggestionListC7.hide();
      }
    }));
    this.$target.addEventListener("click", e => {
      const {
        classList,
        innerText
      } = e.target;

      if (classList.contains("clear-icon")) {
        this.clearInputValue();
      }

      if (classList.contains("suggestion-list-li")) {
        var _this$props, _this$suggestionListC8;

        (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.onSubmitInput(innerText);
        (_this$suggestionListC8 = this.suggestionListComp) === null || _this$suggestionListC8 === void 0 ? void 0 : _this$suggestionListC8.hide();
      }
    });
    document.addEventListener("click", e => {
      const $eventTarget = e.target;

      if (!$eventTarget.closest((0,_common_dom__WEBPACK_IMPORTED_MODULE_6__.idToQuery)(this.$target.id))) {
        var _this$suggestionListC9;

        (_this$suggestionListC9 = this.suggestionListComp) === null || _this$suggestionListC9 === void 0 ? void 0 : _this$suggestionListC9.hide();
      }
    });
    this.$target.addEventListener("focusin", () => {
      var _this$suggestionListC10;

      (_this$suggestionListC10 = this.suggestionListComp) === null || _this$suggestionListC10 === void 0 ? void 0 : _this$suggestionListC10.show();
    });
    this.$target.addEventListener("submit", e => {
      var _this$suggestionListC11, _this$suggestionListC12, _this$props2, _this$suggestionListC13;

      e.preventDefault();
      const selectedItem = (_this$suggestionListC11 = (_this$suggestionListC12 = this.suggestionListComp) === null || _this$suggestionListC12 === void 0 ? void 0 : _this$suggestionListC12.getSelectedItem()) !== null && _this$suggestionListC11 !== void 0 ? _this$suggestionListC11 : "";
      (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.onSubmitInput(selectedItem);
      (_this$suggestionListC13 = this.suggestionListComp) === null || _this$suggestionListC13 === void 0 ? void 0 : _this$suggestionListC13.hide();
    });
  }

  componentDidMount() {
    this.suggestionListComp = new _SuggestionList__WEBPACK_IMPORTED_MODULE_3__["default"]((0,_common_dom__WEBPACK_IMPORTED_MODULE_6__.$)((0,_common_dom__WEBPACK_IMPORTED_MODULE_6__.idToQuery)(_common_constant__WEBPACK_IMPORTED_MODULE_7__.ID.SuggestionListComp), this.$target));
  }

  getInnerHTML() {
    return `
          <form class="relative d-flex items-center">
            <img src="${_icons_search_svg__WEBPACK_IMPORTED_MODULE_1__["default"]}" class="search-icon" />
            <input placeholder="'가' 또는 '나'를 입력해보세요." class="search-input" />
            <img src="${_icons_clear_svg__WEBPACK_IMPORTED_MODULE_2__["default"]}" class="clear-icon" />
            <div id="${_common_constant__WEBPACK_IMPORTED_MODULE_7__.ID.SuggestionListComp}" class="suggestion-list-wrapper"></div>
          </form>
      `;
  }

}

/***/ }),

/***/ "./src/components/SearchResult.ts":
/*!****************************************!*\
  !*** ./src/components/SearchResult.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResult)
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./src/common/Component.ts");

class SearchResult extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setState(nextState) {
    this.state = { ...this.state,
      ...nextState
    };
    this.render();
  }

  getInnerHTML() {
    var _this$state$content, _this$state;

    return `
            <h1>${(_this$state$content = (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.content) !== null && _this$state$content !== void 0 ? _this$state$content : ""}</h1>
        `;
  }

}

/***/ }),

/***/ "./src/components/SuggestionList.ts":
/*!******************************************!*\
  !*** ./src/components/SuggestionList.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SuggestionList)
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./src/common/Component.ts");

const defaultState = {
  suggestionList: [],
  cursor: 0
};
class SuggestionList extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor($target, props) {
    super($target, props, defaultState);
  }

  setState(nextState) {
    this.state = { ...this.state,
      ...nextState
    };
    this.render();
  }

  moveCursorUp() {
    var _this$state$cursor, _this$state, _this$state$suggestio, _this$state2;

    const prevCursor = (_this$state$cursor = (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.cursor) !== null && _this$state$cursor !== void 0 ? _this$state$cursor : 0;
    const suggestionList = (_this$state$suggestio = (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.suggestionList) !== null && _this$state$suggestio !== void 0 ? _this$state$suggestio : [];

    if (!suggestionList.length) {
      return;
    }

    const nextCursor = (suggestionList.length + prevCursor) % (suggestionList.length + 1);
    this.setState({ ...this.state,
      cursor: nextCursor
    });
  }

  moveCursorDown() {
    var _this$state$cursor2, _this$state3, _this$state$suggestio2, _this$state4;

    const prevCursor = (_this$state$cursor2 = (_this$state3 = this.state) === null || _this$state3 === void 0 ? void 0 : _this$state3.cursor) !== null && _this$state$cursor2 !== void 0 ? _this$state$cursor2 : 0;
    const suggestionList = (_this$state$suggestio2 = (_this$state4 = this.state) === null || _this$state4 === void 0 ? void 0 : _this$state4.suggestionList) !== null && _this$state$suggestio2 !== void 0 ? _this$state$suggestio2 : [];

    if (!suggestionList.length) {
      return;
    }

    const nextCursor = (prevCursor + 1) % (suggestionList.length + 1);
    this.setState({ ...this.state,
      cursor: nextCursor
    });
  }

  getSelectedItem() {
    var _this$state$suggestio3, _this$state5, _this$state$cursor3, _this$state6;

    const suggestionList = (_this$state$suggestio3 = (_this$state5 = this.state) === null || _this$state5 === void 0 ? void 0 : _this$state5.suggestionList) !== null && _this$state$suggestio3 !== void 0 ? _this$state$suggestio3 : [];
    const cursor = (_this$state$cursor3 = (_this$state6 = this.state) === null || _this$state6 === void 0 ? void 0 : _this$state6.cursor) !== null && _this$state$cursor3 !== void 0 ? _this$state$cursor3 : 0;

    if (cursor > suggestionList.length) {
      return "";
    }

    return suggestionList[cursor - 1].text;
  }

  hide() {
    this.$target.classList.add("hide");
    this.setState({ ...this.state,
      cursor: 0
    });
  }

  show() {
    this.$target.classList.remove("hide");
  }

  getInnerHTML() {
    var _this$state$suggestio4, _this$state7, _this$state8;

    const suggestionList = (_this$state$suggestio4 = (_this$state7 = this.state) === null || _this$state7 === void 0 ? void 0 : _this$state7.suggestionList) !== null && _this$state$suggestio4 !== void 0 ? _this$state$suggestio4 : [];
    const cursor = (_this$state8 = this.state) === null || _this$state8 === void 0 ? void 0 : _this$state8.cursor;
    return `
            <ul class="suggestion-list">
            ${suggestionList.map((suggestionItem, i) => `
                    <li class="suggestion-list-li ${cursor === i + 1 ? "suggestion-list-selected" : ""}">
                        ${suggestionItem.text}
                    </li>
                    `).join("")} 
            </ul>
        `;
  }

}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shared_layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./shared/layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/shared/layout.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ui_suggestionList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./ui/suggestionList.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/ui/suggestionList.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ui_input_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./ui/input.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/ui/input.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_shared_layout_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ui_suggestionList_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ui_input_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark: #141517;\n  --semi-dark: #303133;\n  --gray: #444751;\n  --white: #d4d7db;\n}\n\nhtml,\nbody {\n  margin: 0;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: var(--dark);\n  color: var(--white);\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\ninput {\n  outline: none;\n}\n\nol,\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.hide {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;EACE,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,SAAS;EACT,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;EACnB;gEAC8D;EAC9D,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import \"./shared/layout.css\";\n@import \"./ui/suggestionList.css\";\n@import \"./ui/input.css\";\n\n:root {\n  --dark: #141517;\n  --semi-dark: #303133;\n  --gray: #444751;\n  --white: #d4d7db;\n}\n\nhtml,\nbody {\n  margin: 0;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: var(--dark);\n  color: var(--white);\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\ninput {\n  outline: none;\n}\n\nol,\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/shared/layout.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/shared/layout.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Layout */\n.relative {\n  position: relative;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.mt-4 {\n  margin-top: 4rem;\n}\n\n.mt-20 {\n  margin-top: 20rem;\n}\n\n/* Box Alignment - Justify Content*/\n.justify-center {\n  justify-content: center;\n}\n\n.items-center {\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/css/shared/layout.css"],"names":[],"mappings":"AAAA,WAAW;AACX;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,mCAAmC;AACnC;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["/* Layout */\n.relative {\n  position: relative;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.mt-4 {\n  margin-top: 4rem;\n}\n\n.mt-20 {\n  margin-top: 20rem;\n}\n\n/* Box Alignment - Justify Content*/\n.justify-center {\n  justify-content: center;\n}\n\n.items-center {\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/ui/input.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/ui/input.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search-input {\n  background-color: var(--semi-dark);\n  color: var(--white);\n  width: 24rem;\n  height: 3rem;\n  border: none;\n  font-weight: 400;\n  font-size: 1rem;\n  padding-left: 2.8rem;\n  border-radius: 0.25rem;\n}\n\n.search-input:hover,\n.search-input:focus,\n.search-input:active {\n  background-color: var(--semi-dark);\n}\n\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n}\n\n.clear-icon {\n  position: absolute;\n  right: 0.75rem;\n}\n", "",{"version":3,"sources":["webpack://./src/css/ui/input.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;;;EAGE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB","sourcesContent":[".search-input {\n  background-color: var(--semi-dark);\n  color: var(--white);\n  width: 24rem;\n  height: 3rem;\n  border: none;\n  font-weight: 400;\n  font-size: 1rem;\n  padding-left: 2.8rem;\n  border-radius: 0.25rem;\n}\n\n.search-input:hover,\n.search-input:focus,\n.search-input:active {\n  background-color: var(--semi-dark);\n}\n\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n}\n\n.clear-icon {\n  position: absolute;\n  right: 0.75rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/ui/suggestionList.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/ui/suggestionList.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".suggestion-list-wrapper {\n  background-color: var(--semi-dark);\n  position: absolute;\n  top: 3.5rem;\n  z-index: 100;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.25rem;\n}\n\n.suggestion-list-li {\n  padding: 0.75rem;\n  margin: 0.25rem;\n  border-radius: 0.25rem;\n}\n\n.suggestion-list-li:hover,\n.suggestion-list-selected {\n  background-color: var(--gray);\n}\n", "",{"version":3,"sources":["webpack://./src/css/ui/suggestionList.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;AACxB;;AAEA;;EAEE,6BAA6B;AAC/B","sourcesContent":[".suggestion-list-wrapper {\n  background-color: var(--semi-dark);\n  position: absolute;\n  top: 3.5rem;\n  z-index: 100;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.25rem;\n}\n\n.suggestion-list-li {\n  padding: 0.75rem;\n  margin: 0.25rem;\n  border-radius: 0.25rem;\n}\n\n.suggestion-list-li:hover,\n.suggestion-list-selected {\n  background-color: var(--gray);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/icons/clear.svg":
/*!*****************************!*\
  !*** ./src/icons/clear.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "da6984f05135874f72026a9a1a1d25e6.svg");

/***/ }),

/***/ "./src/icons/search.svg":
/*!******************************!*\
  !*** ./src/icons/search.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8fb09c15b905ff348a73600ad3849349.svg");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App.ts");
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/dom */ "./src/common/dom.ts");



new _components_App__WEBPACK_IMPORTED_MODULE_1__["default"]((0,_common_dom__WEBPACK_IMPORTED_MODULE_2__.$)((0,_common_dom__WEBPACK_IMPORTED_MODULE_2__.idToQuery)("app")));
})();

/******/ })()
;
//# sourceMappingURL=main.js.map