'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var Button = require('react-bootstrap/Button');
var ReactDOM = require('react-dom');
var ReactBootstrapBadge = require('react-bootstrap/Badge');
var dateFns = require('date-fns');
require('react-dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var ReactBootstrapBadge__default = /*#__PURE__*/_interopDefaultLegacy(ReactBootstrapBadge);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ".card {\n  width: 100%;\n  margin-bottom: 15px;\n  border: 0;\n}\n.card > .title-section > .title {\n  color: #000;\n  font-size: 1.5rem;\n  text-align: left;\n  margin-bottom: 10px;\n  font-weight: 200;\n}\n.card > .title-section > .title.site-content-title {\n  font-size: 0.625rem;\n  font-weight: normal;\n  color: #cccccc;\n  margin: 16px 0 0;\n  background: #fff;\n  padding-bottom: 4px;\n}\n.card .content {\n  color: #000;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  background: #fff;\n}\n.card .content.site-content {\n  padding: 0;\n  height: 430px;\n}";
styleInject(css_248z$5);

var Card = function Card(props) {
  var className = props.className,
      titleSectionClassName = props.titleSectionClassName,
      titleClassName = props.titleClassName,
      contentClassName = props.contentClassName,
      title = props.title,
      titleActions = props.titleActions,
      children = props.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classNames__default["default"]('card', className)
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: classNames__default["default"]('title-section d-flex', titleSectionClassName)
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: classNames__default["default"]('title', titleClassName)
  }, title), titleActions && titleActions), /*#__PURE__*/React__default["default"].createElement("div", {
    className: classNames__default["default"]('content', contentClassName)
  }, children));
};

Card.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].array, PropTypes__default["default"].object]),
  titleSectionClassName: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].array, PropTypes__default["default"].object]),
  titleClassName: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].array, PropTypes__default["default"].object]),
  title: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].node, PropTypes__default["default"].string]),
  titleActions: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].node, PropTypes__default["default"].string]),
  contentClassName: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].node, PropTypes__default["default"].string]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].node, PropTypes__default["default"].string]).isRequired
};
Card.defaultProps = {
  className: null,
  titleSectionClassName: null,
  titleClassName: 'justify-content-between',
  contentClassName: null,
  title: null,
  titleActions: null
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$6() {
  _extends$6 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$6.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$2(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _path$4;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function SvgKeyboardArrowRight(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.438 21.813l6.125-6.125-6.125-6.125 1.875-1.875 8 8-8 8z"
  })));
}

var _path$3;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function SvgKeyboardArrowLeft(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.563 21.438l-1.875 1.875-8-8 8-8 1.875 1.875-6.125 6.125z"
  })));
}

var css_248z$4 = ".paginate-wrapper .paginate-section {\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.paginate-wrapper .paginate-section .button {\n  font-size: 0.875rem;\n  padding: 2px 14px;\n}\n.paginate-wrapper .paginate-section .button .arrow-icon {\n  fill: #fff;\n  height: 24px;\n  width: 20px;\n}\n.paginate-wrapper .paginate-section .button.prev {\n  margin-right: 20px;\n}\n.paginate-wrapper .paginate-section .button.next {\n  margin-left: 20px;\n}\n.paginate-wrapper .paginate-section .static-text {\n  margin: 0 5px;\n  font-size: 0.875rem;\n}\n.paginate-wrapper .paginate-section .input {\n  width: 70px;\n  height: 30px;\n  border: 1px solid #808080;\n  text-align: center;\n}\n.paginate-wrapper .paginate-section .select-container {\n  padding: 2px;\n  border: 1px solid #808080;\n}\n.paginate-wrapper .paginate-section .select-container .select {\n  border: none;\n  font-size: 0.875rem;\n  background: #fff;\n  outline: 0;\n}";
styleInject(css_248z$4);

var Paginate = /*#__PURE__*/function (_Component) {
  _inherits(Paginate, _Component);

  var _super = _createSuper(Paginate);

  function Paginate() {
    var _this;

    _classCallCheck(this, Paginate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentPage: 1,
      selectCurrentValue: ''
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var rowsPerPageDefault = _this.props.rowsPerPageDefault;

      _this.setState({
        selectCurrentValue: rowsPerPageDefault
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function () {
      _this.setState(function (prevState) {
        return {
          currentPage: prevState.currentPage - 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClickNext", function () {
      _this.setState(function (prevState) {
        return {
          currentPage: prevState.currentPage + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeInput", function (e) {
      var currentPage = parseFloat(e.target.value);

      _this.setState({
        currentPage: currentPage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeSelect", function (e) {
      var selectCurrentValue = parseFloat(e.target.value);

      _this.setState({
        selectCurrentValue: selectCurrentValue,
        currentPage: 1
      });
    });

    return _this;
  }

  _createClass(Paginate, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          selectCurrentValue = _this$state.selectCurrentValue;
      var _this$props = this.props,
          items = _this$props.items,
          nextLabel = _this$props.nextLabel,
          previousLabel = _this$props.previousLabel,
          rowsPerPageOptions = _this$props.rowsPerPageOptions;
      var totalPages = selectCurrentValue && Math.ceil(items.length / parseFloat(selectCurrentValue));
      var selectOptions = rowsPerPageOptions.map(function (item) {
        return /*#__PURE__*/React__default["default"].createElement("option", {
          key: item,
          value: item
        }, "".concat(item, " rows"));
      }); // Logic for display data

      var indexOfLastItem = currentPage * selectCurrentValue;
      var indexOfFirstItem = indexOfLastItem - selectCurrentValue;
      var currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
      var itemsList = currentItems.map(function (item, index) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: index
        }, item);
      });
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "ui-library paginate-wrapper"
      }, /*#__PURE__*/React__default["default"].createElement("div", null, itemsList), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "paginate-section"
      }, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
        className: "btn-primary button prev",
        onClick: this.onClickPrev,
        disabled: currentPage === 1
      }, /*#__PURE__*/React__default["default"].createElement(SvgKeyboardArrowLeft, {
        className: "arrow-icon"
      }), previousLabel), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "static-text"
      }, "Page"), /*#__PURE__*/React__default["default"].createElement("input", {
        type: "number",
        className: "input",
        value: currentPage,
        max: totalPages,
        min: 1,
        onChange: this.onChangeInput
      }), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "static-text"
      }, "of ".concat(totalPages)), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "select-container"
      }, /*#__PURE__*/React__default["default"].createElement("select", {
        value: selectCurrentValue,
        className: "select",
        onChange: this.onChangeSelect
      }, selectOptions)), /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
        className: "btn-primary button next",
        onClick: this.onClickNext,
        disabled: currentPage === totalPages
      }, nextLabel, /*#__PURE__*/React__default["default"].createElement(SvgKeyboardArrowRight, {
        className: "arrow-icon"
      }))));
    }
  }]);

  return Paginate;
}(React.Component);

_defineProperty(Paginate, "propTypes", {
  previousLabel: PropTypes__default["default"].string,
  nextLabel: PropTypes__default["default"].string,
  items: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].arrayOf(PropTypes__default["default"].node)]).isRequired,
  rowsPerPageDefault: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]).isRequired,
  rowsPerPageOptions: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array]).isRequired
});

_defineProperty(Paginate, "defaultProps", {
  previousLabel: 'Prev',
  nextLabel: 'Next'
});

var SimpleList = function SimpleList(props) {
  var data = props.data,
      renderItem = props.renderItem,
      className = props.className,
      showPagination = props.showPagination;
  var items = data.map(function (value, index) {
    return renderItem(value, index);
  });
  return showPagination ? /*#__PURE__*/React__default["default"].createElement(Paginate, {
    items: items,
    rowsPerPageOptions: [2, 4, 6, 10],
    rowsPerPageDefault: 10
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: classNames__default["default"]('simple-list', className)
  }, items);
};

SimpleList.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].array, PropTypes__default["default"].object]),
  data: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array]).isRequired,
  renderItem: PropTypes__default["default"].func.isRequired,
  showPagination: PropTypes__default["default"].bool
};
SimpleList.defaultProps = {
  className: null,
  showPagination: false
};

var css_248z$3 = "@keyframes rotateLoader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner {\n  animation: rotateLoader 0.5s linear infinite;\n  width: 80px;\n  height: 80px;\n  position: relative;\n}\n.loading-spinner .loading-circle-path {\n  fill: transparent;\n  stroke-width: 8;\n  stroke-dashoffset: 10;\n  stroke-dasharray: 160;\n}\n.loading-spinner linearGradient stop {\n  stop-color: #006ba6;\n}";
styleInject(css_248z$3);

var LoadingSpinner = function LoadingSpinner(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    className: classNames__default["default"]('ui-library loading-spinner', className),
    "data-testid": "loading-spinner",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React__default["default"].createElement("circle", {
    className: "loading-circle-path",
    cx: "50",
    cy: "50",
    r: "30",
    stroke: "url(#spinner-gradient)"
  }), /*#__PURE__*/React__default["default"].createElement("linearGradient", {
    id: "spinner-gradient"
  }, /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "20%",
    stopOpacity: "1"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "50%",
    stopOpacity: ".7"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "70%",
    stopOpacity: ".5"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "100%",
    stopOpacity: "0"
  })));
};

LoadingSpinner.propTypes = {
  className: PropTypes__default["default"].string
};
LoadingSpinner.defaultProps = {
  className: ''
};

var css_248z$2 = ".loading-overlay-container {\n  z-index: 1000;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n.loading-overlay-container.modal-overlay {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.loading-overlay-container.full-size {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}";
styleInject(css_248z$2);

var _excluded$1 = ["loading", "fullSize", "isModalOverlay"];

var LoadingOverlay = function LoadingOverlay(_ref) {
  var loading = _ref.loading,
      fullSize = _ref.fullSize,
      isModalOverlay = _ref.isModalOverlay,
      rest = _objectWithoutProperties(_ref, _excluded$1);

  return loading && /*#__PURE__*/React__default["default"].createElement("div", _extends$6({
    className: classNames__default["default"]('ui-library loading-overlay-container flex-fill', {
      'full-size': fullSize,
      'modal-overlay': isModalOverlay
    }),
    "data-testid": "loading-overlay"
  }, rest), /*#__PURE__*/React__default["default"].createElement(LoadingSpinner, null));
};

LoadingOverlay.propTypes = {
  loading: PropTypes__default["default"].bool,
  fullSize: PropTypes__default["default"].bool,
  isModalOverlay: PropTypes__default["default"].bool
};
LoadingOverlay.defaultProps = {
  loading: false,
  fullSize: false,
  isModalOverlay: false
};

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].shape({
  enter: PropTypes__default["default"].number,
  exit: PropTypes__default["default"].number,
  appear: PropTypes__default["default"].number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].shape({
  enter: PropTypes__default["default"].string,
  exit: PropTypes__default["default"].string,
  active: PropTypes__default["default"].string
}), PropTypes__default["default"].shape({
  enter: PropTypes__default["default"].string,
  enterDone: PropTypes__default["default"].string,
  enterActive: PropTypes__default["default"].string,
  exit: PropTypes__default["default"].string,
  exitDone: PropTypes__default["default"].string,
  exitActive: PropTypes__default["default"].string
})]) : null;

var TransitionGroupContext = React__default["default"].createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default["default"].findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default["default"].findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default["default"].findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default["default"].createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default["default"].cloneElement(React__default["default"].Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default["default"].Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes__default["default"].shape({
    current: typeof Element === 'undefined' ? PropTypes__default["default"].any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes__default["default"].instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func.isRequired, PropTypes__default["default"].element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes__default["default"].bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes__default["default"].bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes__default["default"].bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes__default["default"].bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes__default["default"].bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes__default["default"].bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes__default["default"].func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes__default["default"].func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes__default["default"].func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes__default["default"].func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes__default["default"].func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes__default["default"].func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes__default["default"].func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function cx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}
function hasToastId(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return React.isValidElement(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
  DARK: 'dark'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var height = node.scrollHeight;
  var style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = height + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(function () {
        return done();
      }, duration);
    });
  });
}

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 750 : _ref$duration,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  var enterDuration, exitDuration;

  if (Array.isArray(duration) && duration.length === 2) {
    enterDuration = duration[0];
    exitDuration = duration[1];
  } else {
    enterDuration = exitDuration = duration;
  }

  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        props = _objectWithoutPropertiesLoose(_ref2, ["children", "position", "preventExitTransition", "done"]);

    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;

    var onEnter = function onEnter() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.add(enterClassName);
        node.style.animationFillMode = 'forwards';
        node.style.animationDuration = enterDuration + "ms";
      }
    };

    var onEntered = function onEntered() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.remove(enterClassName);
        node.style.removeProperty('animationFillMode');
        node.style.removeProperty('animationDuration');
      }
    };

    var onExited = function onExited() {
      var node = props.nodeRef.current;

      if (node) {
        node.removeEventListener('animationend', onExited);
        collapse ? collapseToast(node, done, collapseDuration) : done();
      }
    };

    var onExit = function onExit() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.add(exitClassName);
        node.style.animationFillMode = 'forwards';
        node.style.animationDuration = exitDuration + "ms";
        node.addEventListener('animationend', onExited);
      }
    };

    return React.createElement(Transition$1, Object.assign({}, props, {
      timeout: preventExitTransition ? collapse ? collapseDuration : 50
      /* DEBOUNCE_DURATION */
      : {
        enter: enterDuration,
        exit: collapse ? exitDuration + collapseDuration : exitDuration + 50
        /* DEBOUNCE_DURATION */

      },
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: preventExitTransition ? onExited : onExit,
      unmountOnExit: true
    }), children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(function (timer) {
        return clearTimeout(timer);
      });
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = React.useRef(arg);
  React.useEffect(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 'REMOVE':
      return hasToastId(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

function useToastContainer(props) {
  var _useReducer = React.useReducer(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = React.useReducer(reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = React.useRef(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  React.useEffect(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  React.useEffect(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  React.useEffect(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var _instance$props = instance.props,
        limit = _instance$props.limit,
        enableMultiContainer = _instance$props.enableMultiContainer;

    if (limit && (!containerId || instance.containerId === containerId && enableMultiContainer)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    var queueLen = queue.length;
    toastCount = hasToastId(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = hasToastId(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    }

    dispatch({
      type: 'REMOVE',
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId; // ensure that exit transition has been completed, hence the timeout


    setTimeout(function () {
      appendToast(toastContent, toastProps, staleId);
    }, 500);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || instance.isToastActive(toastId) && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = _objectWithoutPropertiesLoose(_ref3, ["delay", "staleId"]);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId;
    var props = instance.props,
        isToastActive = instance.isToastActive;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = !isToastActive(toastId);
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose;
    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if (React.isValidElement(content) && !isStr(content.type)) {
      toastContent = React.cloneElement(content, {
        closeToast: closeToast,
        toastProps: toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 'ADD',
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    forceUpdate();
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = React.useState(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = React.useState(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = React.useRef(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    deltaX: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  React.useEffect(function () {
    if (isFn(props.onOpen)) props.onOpen(React.isValidElement(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose(React.isValidElement(syncProps.children) && syncProps.children.props);
    };
  }, []);
  React.useEffect(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  React.useEffect(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    var toast = toastRef.current;
    drag.canCloseOnClick = true;
    drag.canDrag = true;
    drag.boundingRect = toast.getBoundingClientRect();
    toast.style.transition = '';
    drag.start = drag.x = getX(e.nativeEvent);
    drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    e.preventDefault();
    var toast = toastRef.current;

    if (drag.canDrag) {
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.deltaX = drag.x - drag.start;
      drag.y = getY(e); // prevent false positif during a toast click

      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translateX(" + drag.deltaX + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.deltaX / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.deltaX) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = 'translateX(0)';
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return React.createElement("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _ref2, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn;

  var style = _extends$3({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassArr = ["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_ref2 = {}, _ref2["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _ref2)];
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: cx.apply(void 0, defaultClassArr)
  }) : cx.apply(void 0, [].concat(defaultClassArr, [className])); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent);
  return React.createElement("div", Object.assign({
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var Toast = function Toast(props) {
  var _ref;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast;
  var defaultClassArr = ["Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_ref = {}, _ref["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _ref)];
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: cx.apply(void 0, defaultClassArr)
  }) : cx.apply(void 0, [].concat(defaultClassArr, [className]));
  var controlledProgress = !!progress;

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type
    };
    if (isFn(closeButton)) return closeButton(props);
    if (React.isValidElement(closeButton)) return React.cloneElement(closeButton, props);
  }

  return React.createElement(Transition, {
    "in": props["in"],
    appear: true,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, React.createElement("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses || undefined
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), React.createElement("div", Object.assign({}, props["in"] && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : cx("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), children), renderCloseButton(closeButton), (autoClose || controlledProgress) && React.createElement(ProgressBar, Object.assign({}, updateId && !controlledProgress ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    delay: autoClose,
    isRunning: isRunning,
    isIn: props["in"],
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: controlledProgress,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});

var ToastPositioner = function ToastPositioner(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "style"]);

  // Monkey patch react-transition-group
  // As exit transition is broken with strict mode
  delete rest["in"];
  return React.createElement("div", {
    className: className,
    style: style
  }, React.Children.map(children, function (child) {
    return React.cloneElement(child, rest);
  }));
};

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;
  return React.createElement("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var _cx, _cx2;

    var swag = {
      className: isFn(className) ? className({
        position: position,
        rtl: rtl,
        defaultClassName: cx("Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container", "Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container--rtl"] = rtl, _cx))
      }) : cx("Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container", "Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container--" + position, (_cx2 = {}, _cx2["Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container--rtl"] = rtl, _cx2), parseClassName(className)),
      style: toastList.length === 0 ? _extends$3({}, style, {
        pointerEvents: 'none'
      }) : _extends$3({}, style)
    };
    return React.createElement(ToastPositioner, Object.assign({}, swag, {
      key: "container-" + position
    }), toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return React.createElement(Toast, Object.assign({}, toastProps, {
        "in": isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};

if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  ToastContainer.propTypes = {
    // @ts-ignore
    position: /*#__PURE__*/PropTypes__default["default"].oneOf( /*#__PURE__*/objectValues(POSITION)),
    // @ts-ignore
    autoClose: /*#__PURE__*/PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number]),
    // @ts-ignore
    closeButton: /*#__PURE__*/PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].bool, PropTypes__default["default"].func]),
    hideProgressBar: PropTypes__default["default"].bool,
    pauseOnHover: PropTypes__default["default"].bool,
    closeOnClick: PropTypes__default["default"].bool,
    newestOnTop: PropTypes__default["default"].bool,
    className: PropTypes__default["default"].any,
    style: PropTypes__default["default"].object,
    toastClassName: /*#__PURE__*/PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string]),
    bodyClassName: /*#__PURE__*/PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string]),
    progressClassName: /*#__PURE__*/PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string]),
    progressStyle: PropTypes__default["default"].object,
    transition: PropTypes__default["default"].func,
    rtl: PropTypes__default["default"].bool,
    draggable: PropTypes__default["default"].bool,
    draggablePercent: PropTypes__default["default"].number,
    pauseOnFocusLoss: PropTypes__default["default"].bool,
    enableMultiContainer: PropTypes__default["default"].bool,
    containerId: /*#__PURE__*/PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
    role: PropTypes__default["default"].string,
    onClick: PropTypes__default["default"].func
  };
}

ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  role: 'alert'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the container by id. Returns the last container declared when no id is given.
 */


function getContainer(containerId) {
  if (!isAnyContainerMounted()) return null;
  return containers.get(!containerId ? latestInstance : containerId);
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = getContainer(containerId);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      ReactDOM.render(React.createElement(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends$3({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.success = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.SUCCESS, options));
};

toast.info = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.INFO, options));
};

toast.error = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.ERROR, options));
};

toast.warning = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.WARNING, options));
};

toast.dark = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DARK, options));
};
/**
 * Maybe I should remove warning in favor of warn, I don't know
 */


toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  return isAnyContainerMounted() && eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return isAnyContainerMounted() && eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends$3({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = typeof nextOptions.render !== 'undefined' ? nextOptions.render : oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});

var _path$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgKeyboardArrowUp(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.875 20.563L8 18.688l8-8 8 8-1.875 1.875L16 14.438z"
  })));
}

var _path$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgKeyboardArrowDown(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.875 10.438L16 16.563l6.125-6.125L24 12.313l-8 8-8-8z"
  })));
}

var _excluded = ["position"];

var Arrow = function Arrow(_ref) {
  var position = _ref.position,
      rest = _objectWithoutProperties(_ref, _excluded);

  switch (position) {
    case 'up':
      return /*#__PURE__*/React__default["default"].createElement(SvgKeyboardArrowUp, rest);

    case 'down':
      return /*#__PURE__*/React__default["default"].createElement(SvgKeyboardArrowDown, rest);

    case 'left':
      return /*#__PURE__*/React__default["default"].createElement(SvgKeyboardArrowLeft, rest);

    case 'right':
      return /*#__PURE__*/React__default["default"].createElement(SvgKeyboardArrowRight, rest);

    default:
      return null;
  }
};

Arrow.propTypes = {
  position: PropTypes__default["default"].string.isRequired
};

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = _basePropertyOf(deburredLetters);

var _deburrLetter = deburrLetter;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange$3 = '\\u0300-\\u036f',
    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;

/** Used to compose unicode capture groups. */
var rsCombo$2 = '[' + rsComboRange$3 + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo$2, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString_1(string);
  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr;

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords;

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord;

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange$2 = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo$1 = '[' + rsComboRange$2 + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords;

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString_1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
  }
  return string.match(pattern) || [];
}

var words_1 = words;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder;

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = _createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

var kebabCase_1 = kebabCase;

// Generated with util/create-component.js

var StatusFlag = function StatusFlag(_ref) {
  var status = _ref.status,
      type = _ref.type,
      className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement(ReactBootstrapBadge__default["default"], {
    variant: "".concat(type, "-").concat(kebabCase_1(status)),
    className: "ui-library ".concat(className)
  }, status);
};

StatusFlag.propTypes = {
  status: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string
};
StatusFlag.defaultProps = {
  className: ''
};

var DEFAULT_PLACEHOLDER = '--';
var isEmpty = function isEmpty(value) {
  return value === null || value === undefined || value === '';
};
/**
 *
 * @param {any} value
 * @param {string} [customPlaceholder]
 */

var addPlaceholder = function addPlaceholder(value, customPlaceholder) {
  var placeholder = customPlaceholder || DEFAULT_PLACEHOLDER;
  return isEmpty(value) ? placeholder : value;
};

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return _hasUnicode(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_1(string);

    var strSymbols = _hasUnicode(string)
      ? _stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? _castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = _createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = _createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst_1(word);
});

var startCase_1 = startCase;

/**
 * Converts `string`, as a whole, to lower case just like
 * [String#toLowerCase](https://mdn.io/toLowerCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.toLower('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * _.toLower('fooBar');
 * // => 'foobar'
 *
 * _.toLower('__FOO_BAR__');
 * // => '__foo_bar__'
 */
function toLower(value) {
  return toString_1(value).toLowerCase();
}

var toLower_1 = toLower;

var keyToLabel = function keyToLabel(label) {
  return startCase_1(toLower_1(label.replace('_', ' ')));
};
var getIdsEnumLabel = function getIdsEnumLabel(enumsIdsMap, id) {
  if (enumsIdsMap && enumsIdsMap[id]) {
    return keyToLabel(enumsIdsMap[id]);
  }

  return '--';
};

var format = function format(date, formatToken) {
  return dateFns.format(dateFns.isDate(date) ? date : dateFns.parseISO(date), formatToken);
};

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgDelete(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M25.313 5.313v2.688H6.688V5.313h4.625L12.688 4h6.625l1.375 1.313h4.625zM8 25.313v-16h16v16c0 1.438-1.25 2.688-2.688 2.688H10.687c-1.438 0-2.688-1.25-2.688-2.688z"
  })));
}

var css_248z$1 = ".linked-cases-list-item {\n  border: 1px solid #808080;\n  position: relative;\n  margin-bottom: 10px;\n}\n.linked-cases-list-item:last-child {\n  margin-bottom: 0px;\n}\n.linked-cases-list-item .item-header {\n  display: flex;\n  align-items: center;\n  outline: 0;\n}\n.linked-cases-list-item .item-header .toggle-icon {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n.linked-cases-list-item .item-header .report-header {\n  display: block;\n  width: calc(100% - 25px);\n}\n.linked-cases-list-item .item-header .report-header .case-information {\n  font-size: 1.125rem;\n}\n.linked-cases-list-item .item-header .report-header .case-information .status-badge {\n  margin-left: 12px;\n}\n.linked-cases-list-item .item-header .report-header .case-information .gray {\n  color: #808080;\n}\n.linked-cases-list-item .item-header .report-header .category {\n  color: #808080;\n}\n.linked-cases-list-item .item-header .report-header .status.bad,\n.linked-cases-list-item .item-header .report-header .category.bad {\n  color: #fd462a;\n}\n.linked-cases-list-item .expanded-content {\n  text-align: left;\n  color: #cccccc;\n  font-size: 1.125rem;\n  padding-left: 13px;\n}\n.linked-cases-list-item .expanded-content .case-name {\n  color: #808080;\n  margin-bottom: 0;\n}\n.linked-cases-list-item .expanded-content .url {\n  display: block;\n}\n.linked-cases-list-item .expanded-content .result {\n  margin: 10px 0;\n  color: #808080;\n}\n.linked-cases-list-item .expanded-content .button-content {\n  text-align: right;\n}\n.linked-cases-list-item .expanded-content .button-content .button-header {\n  color: #fff;\n  fill: #fff;\n}\n.linked-cases-list-item .expanded-content .button-content .button-header svg {\n  margin-right: 14px;\n  width: 24px;\n  height: 24px;\n}\n.linked-cases-list-item .expanded-content .screenshot-content {\n  margin-bottom: 10px;\n}\n.linked-cases-list-item .expanded-content .screenshot-content .screenshot {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #cccccc;\n}\n.linked-cases-list-item .expanded-content .label {\n  font-size: 0.625rem;\n  color: #808080;\n  display: block;\n}\n.linked-cases-list-item .expanded-content .description {\n  color: #000;\n  font-size: 1.125rem;\n  padding: 0;\n  margin: 0;\n  display: block;\n  margin-bottom: 11px;\n}\n.linked-cases-list-item .iconbox {\n  position: absolute;\n  top: 20%;\n  right: 0;\n}\n.linked-cases-list-item .remove-btn {\n  background-color: transparent;\n  border: 0;\n}\n.linked-cases-list-item .link-btn {\n  width: 100%;\n  display: block;\n  background-color: transparent;\n  color: #0071bc;\n  border: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: left;\n}\n.linked-cases-list-item .link-btn:hover, .linked-cases-list-item .link-btn:active {\n  color: rgba(0, 107, 166, 0.86);\n  text-decoration: underline;\n}";
styleInject(css_248z$1);

var DATE_FORMAT = 'yyyy-MM-dd';
var TRACE_LABEL = 'Trace';
var LEAD_LABEL = 'Lead';

var LinkedCasesListItem = function LinkedCasesListItem(_ref) {
  var index = _ref.index,
      linkedCase = _ref.linkedCase,
      isExpanded = _ref.isExpanded,
      onExpand = _ref.onExpand,
      onCollapse = _ref.onCollapse,
      caseTypes = _ref.caseTypes,
      statusIdsMap = _ref.statusIdsMap,
      enableDeleteAction = _ref.enableDeleteAction,
      deletionOnlyOnExpanded = _ref.deletionOnlyOnExpanded,
      onRemove = _ref.onRemove,
      caseRedirectionMap = _ref.caseRedirectionMap,
      viewOnly = _ref.viewOnly,
      showTraceCaseId = _ref.showTraceCaseId,
      onUnpublishedItem = _ref.onUnpublishedItem;
  var mid = linkedCase.mid,
      url = linkedCase.url,
      merchantName = linkedCase.merchantName,
      organizationName = linkedCase.orgName,
      caseTypeId = linkedCase.type,
      caseId = linkedCase.caseId,
      statusId = linkedCase.status,
      datePublished = linkedCase.datePublished;
  var caseTypeLabel = React.useMemo(function () {
    return getIdsEnumLabel(caseTypes, caseTypeId).replace('Case', '').replace('Cri', 'CRI');
  }, [caseTypeId, caseTypes]);
  var status = React.useMemo(function () {
    return getIdsEnumLabel(statusIdsMap, statusId);
  }, [caseTypeId, statusIdsMap]);
  var datePublishedStr = React.useMemo(function () {
    if (datePublished) {
      return format(datePublished, DATE_FORMAT);
    }

    return '--';
  }, [datePublished]);
  var toggleExpand = React.useCallback(function () {
    if (!isExpanded) {
      return onExpand(index);
    }

    onCollapse();
  }, [isExpanded, onExpand, onCollapse]);
  var headerIconPosition = isExpanded ? 'down' : 'right';
  var caseType = React.useMemo(function () {
    if (!caseTypes) {
      return null;
    }

    return caseTypes[caseTypeId];
  }, [caseTypes, caseTypeId]);
  var caseDetailURL = React.useMemo(function () {
    var redirectTo = '';
    Object.keys(caseRedirectionMap).forEach(function (key) {
      if (caseType === key) {
        redirectTo = "".concat(caseRedirectionMap[key], "/").concat(caseId);
      }
    });
    return redirectTo;
  }, [caseType, caseId]);
  var isTraceCase = TRACE_LABEL === caseTypeLabel.trim();
  var isTraceorLeadCase = TRACE_LABEL === caseTypeLabel.trim() || LEAD_LABEL === caseTypeLabel.trim();
  var buttonContent = "".concat(!showTraceCaseId && isTraceCase ? '' : "".concat(caseId, " - ")).concat(url || '--');

  var handleOnRemove = function handleOnRemove() {
    onRemove(caseId);
  };

  var headerClassNames = isTraceCase ? 'item-header ml-2' : 'item-header';

  var onUnpublished = function onUnpublished() {
    onUnpublishedItem();
  };

  var linkButton = function linkButton(urlCase) {
    if (isTraceorLeadCase) {
      return !(status === 'Published' || status === 'Updated') ? /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
        className: "p-0 link-btn",
        "data-testid": "case-item-link",
        onClick: onUnpublished
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        title: buttonContent
      }, buttonContent)) : /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
        className: "p-0 link-btn",
        "data-testid": "case-item-link",
        href: "".concat(urlCase, "?isNotFromList=true"),
        target: "_blank"
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        title: buttonContent
      }, buttonContent));
    }

    return /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
      className: "p-0 link-btn",
      "data-testid": "case-item-link",
      href: "".concat(caseDetailURL, "?isNotFromList=true")
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      title: buttonContent
    }, buttonContent));
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "linked-cases-list-item"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: headerClassNames
  }, !isTraceCase && /*#__PURE__*/React__default["default"].createElement(Arrow, {
    position: headerIconPosition,
    className: "toggle-icon",
    onClick: toggleExpand,
    "data-testid": "toggle-arrow"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "report-header mt-3 mb-3"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "case-information"
  }, linkButton(caseDetailURL), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "d-block"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, caseTypeLabel), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gray"
  }, "- ".concat(datePublishedStr)), /*#__PURE__*/React__default["default"].createElement(StatusFlag, {
    status: status,
    className: "status-badge",
    type: "tl-case"
  })), enableDeleteAction && !deletionOnlyOnExpanded && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "iconbox"
  }, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    "data-testid": "remove-linked-case",
    className: "d-flex align-items-center remove-btn",
    onClick: handleOnRemove
  }, /*#__PURE__*/React__default["default"].createElement(SvgDelete, {
    fill: "#006ba6"
  }))), deletionOnlyOnExpanded && isExpanded && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "iconbox"
  }, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    "data-testid": "remove-linked-case",
    className: "d-flex align-items-center remove-btn",
    onClick: handleOnRemove
  }, /*#__PURE__*/React__default["default"].createElement(SvgDelete, {
    fill: "#006ba6"
  })))))), isExpanded ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "expanded-content"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "label"
  }, "Merchant ID"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "description"
  }, addPlaceholder(mid))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "label"
  }, "Status"), status === '--' ? /*#__PURE__*/React__default["default"].createElement("p", {
    className: "description"
  }, status) : /*#__PURE__*/React__default["default"].createElement(StatusFlag, {
    status: status,
    type: "tl-case"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "label"
  }, "Merchant Name"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "description"
  }, addPlaceholder(merchantName))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "label"
  }, "Merchant URL"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "description"
  }, addPlaceholder(url))), !viewOnly && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "col-sm-12",
    "data-testid": "client-name"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "label"
  }, "Client"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "description"
  }, addPlaceholder(organizationName))))) : null);
};

LinkedCasesListItem.propTypes = {
  index: PropTypes__default["default"].number.isRequired,
  linkedCase: PropTypes__default["default"].shape({
    caseId: PropTypes__default["default"].number,
    orgName: PropTypes__default["default"].string,
    dateCreated: PropTypes__default["default"].string,
    datePublished: PropTypes__default["default"].string,
    merchantId: PropTypes__default["default"].number,
    merchantName: PropTypes__default["default"].string,
    mid: PropTypes__default["default"].string,
    orgGuid: PropTypes__default["default"].string,
    status: PropTypes__default["default"].number,
    type: PropTypes__default["default"].number,
    url: PropTypes__default["default"].string,
    urlId: PropTypes__default["default"].number
  }),
  onRemove: PropTypes__default["default"].func,
  enableDeleteAction: PropTypes__default["default"].bool,
  isExpanded: PropTypes__default["default"].bool,
  onExpand: PropTypes__default["default"].func,
  onCollapse: PropTypes__default["default"].func,
  caseTypes: PropTypes__default["default"].shape({}),
  statusIdsMap: PropTypes__default["default"].shape({}),
  deletionOnlyOnExpanded: PropTypes__default["default"].bool,
  caseRedirectionMap: PropTypes__default["default"].shape({}),
  viewOnly: PropTypes__default["default"].bool,
  showTraceCaseId: PropTypes__default["default"].bool,
  onUnpublishedItem: PropTypes__default["default"].func
};
LinkedCasesListItem.defaultProps = {
  linkedCase: null,
  isExpanded: false,
  caseTypes: null,
  statusIdsMap: null,
  onExpand: function onExpand() {},
  onCollapse: function onCollapse() {},
  enableDeleteAction: true,
  onRemove: function onRemove() {},
  deletionOnlyOnExpanded: false,
  caseRedirectionMap: {},
  viewOnly: false,
  showTraceCaseId: true,
  onUnpublishedItem: function onUnpublishedItem() {}
};

var css_248z = ".linked-cases-wrapper {\n  padding: 15px;\n}\n.linked-cases-wrapper .reporting-history-content {\n  padding: 5px;\n}\n.linked-cases-wrapper .no-cases-found-message {\n  color: #808080;\n  font-size: 1rem;\n  margin-bottom: 0;\n  text-align: center;\n}";
styleInject(css_248z);

var LinkedCases = function LinkedCases(_ref) {
  var caseId = _ref.caseId,
      linkedCases = _ref.linkedCases,
      isLoadingLinkedCases = _ref.isLoadingLinkedCases,
      caseTypes = _ref.caseTypes,
      statusIdsMap = _ref.statusIdsMap,
      openLinkExistingCase = _ref.openLinkExistingCase,
      getTLCaseEnums = _ref.getTLCaseEnums,
      getCaseTypesEnum = _ref.getCaseTypesEnum,
      shouldFetchCaseTypes = _ref.shouldFetchCaseTypes,
      isLoadingCaseTypes = _ref.isLoadingCaseTypes,
      enableLinkCaseAction = _ref.enableLinkCaseAction,
      enableDeleteAction = _ref.enableDeleteAction,
      isRemovingLinkedCase = _ref.isRemovingLinkedCase,
      removeLinkedCase = _ref.removeLinkedCase,
      refreshLinkedCases = _ref.refreshLinkedCases,
      dispatch = _ref.dispatch,
      openConfirmationPrompt = _ref.openConfirmationPrompt,
      deletionOnlyOnExpanded = _ref.deletionOnlyOnExpanded,
      caseRedirectionMap = _ref.caseRedirectionMap,
      viewOnly = _ref.viewOnly,
      showTraceCaseId = _ref.showTraceCaseId,
      onUnpublishedItem = _ref.onUnpublishedItem;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  React.useEffect(function () {
    getTLCaseEnums();
  }, [getTLCaseEnums]);
  React.useEffect(function () {
    if (!shouldFetchCaseTypes) {
      return;
    }

    if (!isLoadingCaseTypes && !caseTypes) {
      getCaseTypesEnum();
    }
  }, [getCaseTypesEnum, isLoadingCaseTypes, caseTypes, shouldFetchCaseTypes]);

  var onExpand = function onExpand(selectedItem) {
    setSelected(selectedItem);
  };

  var onCollapse = function onCollapse() {
    setSelected(null);
  };

  var handleRemoveItem = React.useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(linkedCaseId) {
      var modalHeader, prompt, proceed;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              modalHeader = /*#__PURE__*/React__default["default"].createElement("span", {
                className: "modal-title"
              }, "Remove Linked Case");
              prompt = /*#__PURE__*/React__default["default"].createElement("div", null, "Are you sure you want to proceed?");
              _context.next = 4;
              return openConfirmationPrompt({
                prompt: prompt,
                header: modalHeader
              });

            case 4:
              proceed = _context.sent;

              if (proceed) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return removeLinkedCase(caseId, linkedCaseId);

            case 10:
              refreshLinkedCases(caseId);
              toast.success('Case unlink successfully');
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);
              toast.error('Unable to unlink case');

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 14]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [caseId, removeLinkedCase, refreshLinkedCases, dispatch]);

  var renderItem = function renderItem(value, index) {
    return /*#__PURE__*/React__default["default"].createElement(LinkedCasesListItem, {
      key: value.caseId,
      caseTypes: caseTypes,
      statusIdsMap: statusIdsMap,
      linkedCase: value,
      index: index,
      isExpanded: index === selected,
      onExpand: onExpand,
      onCollapse: onCollapse,
      enableDeleteAction: enableDeleteAction,
      deletionOnlyOnExpanded: deletionOnlyOnExpanded,
      onRemove: handleRemoveItem,
      caseRedirectionMap: caseRedirectionMap,
      viewOnly: viewOnly,
      showTraceCaseId: showTraceCaseId,
      onUnpublishedItem: onUnpublishedItem
    });
  };

  var showNoCasesFoundMessage = React.useMemo(function () {
    return !isRemovingLinkedCase && !isLoadingLinkedCases && linkedCases && !linkedCases.length;
  }, [isLoadingLinkedCases, linkedCases, isRemovingLinkedCase]);
  var isLoading = isRemovingLinkedCase || isLoadingLinkedCases;
  return /*#__PURE__*/React__default["default"].createElement(Card, {
    className: "ui-library",
    contentClassName: "no-gutters position-relative",
    title: "Linked TL Cases"
  }, /*#__PURE__*/React__default["default"].createElement(LoadingOverlay, {
    loading: isLoading,
    fullSize: true
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "linked-cases-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "linked-cases-content"
  }, showNoCasesFoundMessage && /*#__PURE__*/React__default["default"].createElement("p", {
    className: "no-cases-found-message",
    "data-testid": "no-linked-cases-message"
  }, "No Linked Cases"), linkedCases && /*#__PURE__*/React__default["default"].createElement(SimpleList, {
    data: linkedCases,
    renderItem: renderItem,
    showPagination: false
  }), enableLinkCaseAction && !viewOnly && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    className: "btn-primary button-header w-100 mt-1",
    onClick: function onClick() {
      return openLinkExistingCase('LinkExistingCase', {
        caseId: caseId,
        refreshLinkedCases: refreshLinkedCases
      });
    }
  }, "Link Existing Case")))));
};
LinkedCases.propTypes = {
  caseId: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  openLinkExistingCase: PropTypes__default["default"].func.isRequired,
  getTLCaseEnums: PropTypes__default["default"].func,
  caseTypes: PropTypes__default["default"].shape({}),
  statusIdsMap: PropTypes__default["default"].shape({}),
  getCaseTypesEnum: PropTypes__default["default"].func,
  shouldFetchCaseTypes: PropTypes__default["default"].bool,
  isLoadingCaseTypes: PropTypes__default["default"].bool.isRequired,
  isLoadingLinkedCases: PropTypes__default["default"].bool.isRequired,
  enableLinkCaseAction: PropTypes__default["default"].bool,
  enableDeleteAction: PropTypes__default["default"].bool,
  deletionOnlyOnExpanded: PropTypes__default["default"].bool,
  isRemovingLinkedCase: PropTypes__default["default"].bool.isRequired,
  removeLinkedCase: PropTypes__default["default"].func.isRequired,
  refreshLinkedCases: PropTypes__default["default"].func,
  dispatch: PropTypes__default["default"].func,
  openConfirmationPrompt: PropTypes__default["default"].func.isRequired,
  linkedCases: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    caseId: PropTypes__default["default"].number,
    organizationName: PropTypes__default["default"].string,
    dateCreated: PropTypes__default["default"].string,
    datePublished: PropTypes__default["default"].string,
    merchantId: PropTypes__default["default"].number,
    merchantName: PropTypes__default["default"].string,
    mid: PropTypes__default["default"].string,
    orgGuid: PropTypes__default["default"].string,
    status: PropTypes__default["default"].number,
    type: PropTypes__default["default"].number,
    url: PropTypes__default["default"].string,
    urlId: PropTypes__default["default"].number
  })),
  caseRedirectionMap: PropTypes__default["default"].shape({}),
  viewOnly: PropTypes__default["default"].bool,
  showTraceCaseId: PropTypes__default["default"].bool,
  onUnpublishedItem: PropTypes__default["default"].func
};
LinkedCases.defaultProps = {
  caseTypes: null,
  statusIdsMap: null,
  shouldFetchCaseTypes: true,
  linkedCases: [],
  enableLinkCaseAction: true,
  enableDeleteAction: true,
  deletionOnlyOnExpanded: false,
  refreshLinkedCases: function refreshLinkedCases() {},
  caseId: null,
  dispatch: function dispatch() {
    return Promise.resolve(false);
  },
  caseRedirectionMap: {},
  viewOnly: false,
  getTLCaseEnums: function getTLCaseEnums() {},
  getCaseTypesEnum: function getCaseTypesEnum() {},
  showTraceCaseId: true,
  onUnpublishedItem: function onUnpublishedItem() {}
};

exports.Card = Card;
exports.LinkedCases = LinkedCases;
//# sourceMappingURL=index.js.map
