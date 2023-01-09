import './styles.css';

import BotaoFechar from '../BotaoFechar'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Cabecalho = (props) => {
    const [ideoTipoIcone, setIdeoTipoIcon] = useState();

    const location = useLocation();

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
        if(location.pathname === '/configuracao') {
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
                <div>
                    <BotaoFechar/>
                    <h1>{props.titulo}</h1>
                </div>
                <button onClick={trocaIdeoTipo}>{ideoTipoIcone}</button>
            </div>
        </header>
    );
}

export default Cabecalho;
