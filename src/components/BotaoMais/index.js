import { useRef, useState } from 'react';
import './styles.css';

import { Minimize } from '../Icones';

const BotaoMais = (props) => {
    // Declaração de useStates
    const [temaAtivado, setTemaAtivado] = useState('tema-mais-ativado');

    // Muda a o tema do botão de desativado para ativado e vice e versa
    const clicou = () => {
        if(temaAtivado === 'tema-mais-ativado') {
            setTemaAtivado('tema-mais-desativado');
        }
        else {
            setTemaAtivado('tema-mais-ativado');
        }

    }

    return (
        <button className={`botao-mais ${temaAtivado}`}
        onClick={() => {
            props.minimizar(props.grupo);
            clicou();
        }}>{props.texto} <div id='botao-minimize'><Minimize/></div></button>
    );
}

export default BotaoMais;
