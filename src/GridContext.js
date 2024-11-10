import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export function useGrid() {
    return useContext(GridContext);
}

export function GridProvider({ children }) {
    const [count, setCount] = useState(0);

    const toggleCell = (isOn) => {
        setCount((prevCount) => prevCount + (isOn ? 1 : -1));
    };

    return (
        <GridContext.Provider value={{ count, toggleCell }}>
            {children}
        </GridContext.Provider>
    );
}