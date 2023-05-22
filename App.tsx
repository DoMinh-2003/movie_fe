import { useState } from 'react';
import './App.css';
import MoviesComponent from './component';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoviesComponent api="http://localhost:8081/tournament" />
    </>
  );
}

export default App;
