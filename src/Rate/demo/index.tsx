import React, { useState, useEffect } from 'react';

import Rate from '../index'

export default  function MyRate(){
    const [ Value,setValue ] = useState(3)
    const handleRateChange = (value : any) => {
        setValue(value)
        // 在这里可以处理评分变化的逻辑
    };

    return (
        <div>
            <Rate defaultValue={Value} onChange={handleRateChange} />
        </div>
    );
};

