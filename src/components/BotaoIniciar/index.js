// Importes de estilos
import './styles.css';

import { hiragana } from '../../javascript/listas/hiraganaListas';
import { katakana } from '../../javascript/listas/katakanaListas';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Play } from '../Icones';
import Aviso from '../Aviso';

import { useRef } from 'react';

const BotaoIniciar = () => {
    const avisoRef = useRef(null);

    const [linkPlay, setLinkPlay] = useState('/');

    const checarIdeos = () => {
        return hiragana.length + katakana.length;
    }

    const checar = () => {
        let soma = checarIdeos()
        if(soma === 0) {
            setLinkPlay('/');
        }
        else {
            setLinkPlay('/exercicios');
        }
    }

    const abrirAviso = () => {
        if (checarIdeos() === 0){
            avisoRef.current.style.height = '180px';
        }
    }

    useEffect(() => {
        document.body.addEventListener('load', checar(false));
    })

    return (
        <div>
            <Link to={linkPlay} onClick={abrirAviso} id='botao-iniciar'>
                <button>
                    <Play/>
                </button>
            </Link>
            <Aviso texto='Antes de começar a praticar, clique na engrenagem e escolha os ideogramas que deseja aprender'
            avisoRef={avisoRef}/>
        </div>
    );
}

export default BotaoIniciar;
