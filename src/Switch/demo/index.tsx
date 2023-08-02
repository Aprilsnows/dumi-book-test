import React, { useState } from 'react';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

import Switch from '../index';

export default function Switchs() {
  const handleChange = (checked: any) => {
    console.log(checked);
  };

  return (
    <div className="app">
      <Switch checked={false} onChange={handleChange} />
    </div>
  );
}
