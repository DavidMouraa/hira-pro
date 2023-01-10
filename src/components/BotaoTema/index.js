import './styles.css';

import { LampOff, LampOn } from '../Icones';
import { useState } from 'react';

const BotaoTema = (props) => {
    // Declaração dos useStates
    const [temaIcon, setTemaIcon] = useState(<LampOff/>);

    // Muda o icone de botão tema
    const mudarTemaIcone = () => {
        if(props.tema === 'tema-escuro') {
            setTemaIcon(<LampOff/>);
        }
        else {
            setTemaIcon(<LampOn/>);
        }
    }

    // Altera o tema da página
    const mudarTema = () => {
        if(props.tema === 'tema-claro') {
            props.setTema('tema-escuro');
        }
        else {
            props.setTema('tema-claro');
        }
        mudarTemaIcone();
    }

    return (
        <button id='botao-tema' onClick={mudarTema}>
            {temaIcon}
        </button>
    );
}

export default BotaoTema
