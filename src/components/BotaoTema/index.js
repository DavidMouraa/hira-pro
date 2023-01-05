import './styles.css';

import { LampOff, LampOn } from '../Icones';
import { useState } from 'react';

const BotaoTema = (props) => {
    const [temaIcon, setTemaIcon] = useState(<LampOff/>);

    const mudarTemaIcone = () => {
        if(props.tema === 'tema-claro') {
            setTemaIcon(<LampOff/>);
        }
        else {
            setTemaIcon(<LampOn/>);
        }
    }

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
