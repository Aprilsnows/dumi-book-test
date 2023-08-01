import React, { useState } from "react";

import Slider from "../index";

export default function Sliders() {

  const [values, setValue] = useState(60);

  const handleSliderChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div>
      <Slider
        min={0}
        max={100}
        value={values}
        onChange={handleSliderChange}
      />
    </div>
  );
};