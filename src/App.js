import './App.css';

import Rotas from './Rotas';

import { useEffect, useState } from 'react';

function App() {
  // Declarando hooks useState
  const [tema, setTema] = useState('tema-claro');

  // Declarando funções
  const carregarHome = () => {
    if (window.location.href !== 'http://localhost:3000/')
    window.location.href = 'http://localhost:3000/';
  }

  // Usando useEffect para adicionar eventos ao elemento body e para mudar o tema.
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
