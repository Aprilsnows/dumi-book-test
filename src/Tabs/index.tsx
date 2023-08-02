import React, { useState, FC, memo, useMemo } from 'react';

import TabSwitcher from './demo';

import './index.less';

import { TabsProps, TabsStyle } from './interface';

const Tabs: FC<TabsProps> = memo((props: any) => {
  const { tabs, handleTabClick, activeTab } = props;

  return (
    <div className="Tab">
      <div className="tabs">
        {tabs.map((tab: any, index: any) => (
          <div
            key={index}
            className={`${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
});

Tabs.defaultProps = {
  tabs: [
    { title: 'Tab 1', content: 'This is the content for Tab 1' },
    { title: 'Tab 2', content: 'This is the content for Tab 2' },
    { title: 'Tab 3', content: 'This is the content for Tab 3' },
  ],
  handleTabClick: () => {},
  activeTab: 0,
};

export default Tabs;
