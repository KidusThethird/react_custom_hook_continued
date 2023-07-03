
import './App.css';
import { useState } from 'react';
import { useCount } from './useCount';

function App() {

  const {count, increase, decrease , reset} = useCount(6);

  return (
    <div className="App">
      <h1>Conter App</h1>
<br /><br /><br />

      <h2>{count}</h2>

<button onClick={increase }>+</button>
<button onClick={reset}>Reset</button>
<button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
