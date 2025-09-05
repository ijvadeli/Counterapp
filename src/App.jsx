import { useState } from 'react';
import './App.css';

function App() {

  return (
    <>
    <div className="bg-gray-900">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Add +</button>
      <button onClick={handleDecrement}>Subtract -</button>
    </div>
    </>
  );
}

export default App;