import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  const [count, setCount] = useState(0);
  // Test push on work mac
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <Calculator />
    </div>
  );
}

export default App;
