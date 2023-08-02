import React, { useState, FC, memo, useEffect } from 'react';

import './index.less';

import { RateProps } from './interface';

const Rate: FC<RateProps> = memo((props: any) => {
  let { defaultValue, onChange } = props;

  const [value, setValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number>(0);

  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(defaultValue);
      setHoverValue(defaultValue);
    }
  }, [defaultValue]);

  const handleMouseEnter = (newValue: number) => {
    setHoverValue(newValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(value);
  };

  const handleClick = (newValue: number) => {
    setValue(newValue);
    setHoverValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="rate">
      {[1, 2, 3, 4, 5].map((item) => (
        <span
          key={item}
          onClick={() => handleClick(item)}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
          className={hoverValue >= item ? 'star gold' : 'star'}
        >
          ★
        </span>
      ))}
    </div>
  );
});

Rate.defaultProps = {
  defaultValue: 3,
  onChange: () => {},
};

export default Rate;
