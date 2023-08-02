function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, memo, useEffect } from "react";
import "./index.less";
var Rate = /*#__PURE__*/memo(function (props) {
  var defaultValue = props.defaultValue,
    onChange = props.onChange;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    hoverValue = _useState4[0],
    setHoverValue = _useState4[1];
  useEffect(function () {
    if (defaultValue !== undefined) {
      setValue(defaultValue);
      setHoverValue(defaultValue);
    }
  }, [defaultValue]);
  var handleMouseEnter = function handleMouseEnter(newValue) {
    setHoverValue(newValue);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setHoverValue(value);
  };
  var handleClick = function handleClick(newValue) {
    setValue(newValue);
    setHoverValue(newValue);
    onChange && onChange(newValue);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rate"
  }, [1, 2, 3, 4, 5].map(function (item) {
    return /*#__PURE__*/React.createElement("span", {
      key: item,
      onClick: function onClick() {
        return handleClick(item);
      },
      onMouseEnter: function onMouseEnter() {
        return handleMouseEnter(item);
      },
      onMouseLeave: handleMouseLeave,
      className: hoverValue >= item ? 'star gold' : 'star'
    }, "\u2605");
  }));
});
Rate.defaultProps = {
  defaultValue: 3,
  onChange: function onChange() {}
};
export default Rate;