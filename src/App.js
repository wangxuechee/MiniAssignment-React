import React from 'react';
import Grid from './Grid';
import { GridProvider } from './GridContext';

function App() {
    return (
        <GridProvider>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Grid />
            </div>
        </GridProvider>
    );
}

export default App;