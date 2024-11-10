import React from 'react';
import Cell from './Cell';
import { useGrid } from './GridContext';

function Grid() {
    const { count } = useGrid();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Count: {count}</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 100px)',
                    gridTemplateRows: 'repeat(2, 100px)',
                    gap: '0px',
                }}
            >
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    );
}

export default Grid;