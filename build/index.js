'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

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

var css_248z = ".card {\n  width: 100%;\n  margin-bottom: 15px;\n  border: 0;\n}\n.card > .title-section > .title {\n  color: #000;\n  font-size: 1.5rem;\n  text-align: left;\n  margin-bottom: 10px;\n  font-weight: 200;\n}\n.card > .title-section > .title.site-content-title {\n  font-size: 0.625rem;\n  font-weight: normal;\n  color: #cccccc;\n  margin: 16px 0 0;\n  background: #fff;\n  padding-bottom: 4px;\n}\n.card .content {\n  color: #000;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  background: #fff;\n}\n.card .content.site-content {\n  padding: 0;\n  height: 430px;\n}";
styleInject(css_248z);

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

exports.Card = Card;
//# sourceMappingURL=index.js.map
