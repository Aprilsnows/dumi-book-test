import React, { memo } from 'react';
import './Modal.css';
var Mods = /*#__PURE__*/ memo(function (props) {
  var titles = props.titles,
    message = props.message,
    onClose = props.onClose;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'modal',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'modal-content',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'modal-header',
        },
        /*#__PURE__*/ React.createElement('h3', null, titles),
        /*#__PURE__*/ React.createElement(
          'button',
          {
            className: 'modal-close',
            onClick: onClose,
          },
          'X',
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'modal-body',
        },
        /*#__PURE__*/ React.createElement('p', null, message),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'modal-footer',
        },
        /*#__PURE__*/ React.createElement(
          'button',
          {
            onClick: onClose,
          },
          '\u786E\u5B9A',
        ),
      ),
    ),
  );
});
Mods.defaultProps = {
  titles: '弹窗标题',
  message: '这是一段弹窗内容',
  onClose: function onClose() {},
};
export default Mods;
