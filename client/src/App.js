import { lazy, Suspense, useState } from 'react';

import './App.css';

const CompA = lazy(() => import('./components/CompA'));
const CompB = lazy(() => import('./components/CompB'));


function App() {
  const [state, setstate] = useState('');
  return (
    <div className="App">
      <button onClick={() => setstate('a')}>comp a</button>
      <button onClick={() => setstate('b')}>comp b</button>
      {state === 'a' && <Suspense fallback={<div>...Loading...</div>}><CompA /></Suspense>}
      {state === 'b' && <Suspense fallback={<div>...Loading...</div>}><CompB /></Suspense>}
    </div>
  );
}

export default App;