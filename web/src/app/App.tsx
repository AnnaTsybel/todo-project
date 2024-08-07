import { Suspense } from 'react';

import { Routes } from '@app/routes';

function App() {
    return (
        <Suspense fallback={'...Loading'}>
            <Routes />
        </Suspense>
    );
}

export default App;
