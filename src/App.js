
import './App.css';
import { useState } from 'react';

function App() {

  const[ count, setCount]=useState(0);

  return (
    <div className="App">
      <h1>Conter App</h1>
<br /><br /><br />

      <h2>{count}</h2>

<button onClick={()=> setCount(count+1)}>+</button>
<button onClick={()=> setCount(0)}>Reset</button>
<button onClick={()=> setCount(count-1)}>-</button>
    </div>
  );
}

export default App;
