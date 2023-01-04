// Importes de estilos
import './styles.css';

import { hiragana } from '../../javascript/listas/hiraganaListas';
import { katakana } from '../../javascript/listas/katakanaListas';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BotaoIniciar = () => {
    const [mensagemErro, setMensagemErro] = useState();
    const [linkPlay, setLinkPlay] = useState('/');

    const checar = () => {
        let soma = hiragana.length + katakana.length;
        if(soma === 0) {
            setLinkPlay('/');
        }
        else {
            setLinkPlay('/exercicios');
        }
    }

    return (
        <Link to={linkPlay} id='botao-iniciar' onMouseEnter={checar}>
            <button>
                <img src='./assets/icons/play.svg'/>
            </button>
            <p>{mensagemErro}</p>
        </Link>
    );
}

export default BotaoIniciar;
