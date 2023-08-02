import React, { memo } from 'react';
import './index.less';
var Tabs = /*#__PURE__*/ memo(function (props) {
  var tabs = props.tabs,
    handleTabClick = props.handleTabClick,
    activeTab = props.activeTab;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'Tab',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'tabs',
      },
      tabs.map(function (tab, index) {
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            key: index,
            className: ''.concat(index === activeTab ? 'active' : ''),
            onClick: function onClick() {
              return handleTabClick(index);
            },
          },
          tab.title,
        );
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'tab-content',
      },
      tabs[activeTab].content,
    ),
  );
});
Tabs.defaultProps = {
  tabs: [
    {
      title: 'Tab 1',
      content: 'This is the content for Tab 1',
    },
    {
      title: 'Tab 2',
      content: 'This is the content for Tab 2',
    },
    {
      title: 'Tab 3',
      content: 'This is the content for Tab 3',
    },
  ],
  handleTabClick: function handleTabClick() {},
  activeTab: 0,
};
export default Tabs;
