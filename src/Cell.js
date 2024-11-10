import React, { useState } from 'react';
import { useGrid } from './GridContext';

function Cell() {
    const [isOn, setIsOn] = useState(false);
    const { toggleCell } = useGrid();

    const toggle = () => {
        setIsOn(!isOn);
        toggleCell(!isOn);
    };

    return (
        <div
            onClick={toggle}
            style={{
                width: '100px',
                height: '100px',
                border: '1px solid grey',
                backgroundColor: isOn ? 'black' : 'white',
                boxSizing: 'border-box',
            }}
        ></div>
    );
}

export default Cell;