import React, { useState, FC, memo, useMemo } from 'react';

import Tabs from '../index';

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState<number>(0);

  let tabs = [
    { title: 'Tab 3', content: 'This is the content for Tab 3' },
    { title: 'Tab 2', content: 'This is the content for Tab 2' },
    { title: 'Tab 1', content: 'This is the content for Tab 1' },
  ];
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Tabs tabs={tabs} handleTabClick={handleTabClick} activeTab={activeTab} />
    </div>
  );
}
