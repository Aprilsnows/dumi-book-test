
import React, { useState, FC, memo ,useMemo } from "react";

import './index.less'

import { SliderProps } from './interface'

const Slider :FC<SliderProps>  = memo((props : any) => {

  let { min, max, value,onChange } = props

  const [sliderValue, setSliderValue] = useState(value);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setSliderValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <span>{sliderValue}</span>
    </div>
  );
});

Slider.defaultProps = {
  min:0,
  max:100,
  value:50
}

export default Slider; 