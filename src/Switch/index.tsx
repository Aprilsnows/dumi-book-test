import React, { useState, FC, memo, useMemo } from 'react';

import { SwitchProps } from './interface';

import './index.less';

const Switch: FC<SwitchProps> = memo((props: any) => {
  let { checked, onChange } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };
  return (
    <div className={`switch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
      <div className="slider" />
    </div>
  );
});
Switch.defaultProps = {
  checked: true,
  onChange: () => {},
};

export default Switch;
