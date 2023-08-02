import React from 'react';
import Switch from "../index";
export default function Switchs() {
  var handleChange = function handleChange(checked) {
    console.log(checked);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: false,
    onChange: handleChange
  }));
}
;