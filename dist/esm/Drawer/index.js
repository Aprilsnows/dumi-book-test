import React, { memo } from "react";
import "./index.css";
var Drawer = /*#__PURE__*/memo(function (props) {
  var children = props.children,
    childrens = props.childrens,
    handleCloseDrawer = props.handleCloseDrawer,
    showModal = props.showModal;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleCloseDrawer
  }, "\u5F39\u51FA"), /*#__PURE__*/React.createElement("div", {
    className: "modal ".concat(showModal ? childrens : '')
  }, children));
});
Drawer.defaultProps = {
  children: '主体内容',
  childrens: 'right',
  showModal: false,
  handleCloseDrawer: function handleCloseDrawer() {}
};
export default Drawer;