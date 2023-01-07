import './styles.css';

import { useState } from 'react';

// Importes de componentes
import ExCard from "../../components/ExCard";
import Cabecalho from "../../components/Cabecalho";
import TecladoVirtual from "../../components/TecladoVirtual";

const Exercicios = () => {
    // Hooks para pegar informações
    const [resposta, setResposta] = useState(''); // Resposta do usuario

    return (
        <div id='sc-exercicios'>
            <Cabecalho titulo='Exercícios'/>
            <ExCard
            resposta={resposta}
            setResposta={setResposta}/>
            <TecladoVirtual
            resposta={resposta}
            setResposta={setResposta}/>
        </div>
    );
}

export default Exercicios;
