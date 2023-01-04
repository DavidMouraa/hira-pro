import './App.css';

import Rotas from './Rotas';

import { useEffect } from 'react';

function App() {
  const carregarHome = () => {
    if (window.location.href !== 'http://localhost:3000/')
    window.location.href = 'http://localhost:3000/';
  }

  useEffect(() => {
    document.body.addEventListener('load', carregarHome());
  })

  return (
    <div>
      <Rotas/>
    </div>
  );
}

export default App;
