import { useRef, useState } from 'react';
import './styles.css';

import { Minimize } from '../Icones';

const BotaoMais = (props) => {
    const [temaAtivado, setTemaAtivado] = useState('tema-ativado');

    const clicou = () => {
        if(temaAtivado === 'tema-ativado') {
            setTemaAtivado('tema-desativado');
        }
        else {
            setTemaAtivado('tema-ativado');
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
