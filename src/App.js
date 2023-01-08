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
    if(tema === 'tema-claro'){
      document.body.classList.remove('tema-escuro');
    }
    else {
      document.body.classList.remove('tema-claro');
    }
    document.body.classList.add(tema);
    document.body.addEventListener('load', carregarHome());
  })

  return (
    <div id='app'>
      <Rotas 
      tema={tema}
      setTema={setTema}/>
    </div>
  );
}

export default App;
