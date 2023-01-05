import './App.css';

import Rotas from './Rotas';

import { useEffect, useState } from 'react';

function App() {
  const [tema, setTema] = useState('tema-claro');

  const carregarHome = () => {
    // if (window.location.href !== 'http://localhost:3000/')
    // window.location.href = 'http://localhost:3000/';
  }

  useEffect(() => {
    document.body.addEventListener('load', carregarHome());
  })

  return (
    <div className={tema}>
      <Rotas 
      tema={tema}
      setTema={setTema}/>
    </div>
  );
}

export default App;
