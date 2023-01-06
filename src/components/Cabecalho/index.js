import './styles.css';

import BotaoFechar from '../BotaoFechar'
import { useEffect, useState } from 'react';

const Cabecalho = (props) => {
    const [ideoTipoIcone, setIdeoTipoIcon] = useState();

    const trocaIdeoTipo = () => {
        if(props.ideoTipo === 'katakana'){
            props.setIdeoTipo('hiragana');
        }
        else {
            props.setIdeoTipo('katakana');
        }
        trocaTipoIcon();
        console.log(props.ideoTipo);
    }

    const trocaTipoIcon = () => {
        if(window.location.href === 'http://localhost:3000/configuracao' || window.location.href === 'https://davidmouraa.github.io/hira-pro/configuracao') {
            if(props.ideoTipo === 'katakana'){
                setIdeoTipoIcon('ひ');
            }
            else {
                setIdeoTipoIcon('カ')
            }
        }
    }

    useEffect(() => document.body.addEventListener('load', trocaTipoIcon()));

    return (
        <header>
            <div>
                <BotaoFechar/>
                <h1>{props.titulo}</h1>
            </div>
            <button onClick={trocaIdeoTipo}>{ideoTipoIcone}</button>
        </header>
    );
}

export default Cabecalho;
