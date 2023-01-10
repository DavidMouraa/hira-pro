// Importes de estilos
import './styles.css';

// Importes de Icones
import { Play } from '../Icones';

// Importes de listas
import { hiragana } from '../../javascript/listas/hiraganaListas';
import { katakana } from '../../javascript/listas/katakanaListas';

// Importes de ferramentas
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

// Importes de componentes
import Aviso from '../Aviso';

const BotaoIniciar = () => {
    // Declaração dos useRefs
    const avisoRef = useRef(null);

    // Declaração dos useStates
    const [linkPlay, setLinkPlay] = useState('/');

    // Verifica a quantida de ideogramas ativados
    const checarIdeos = () => {
        return hiragana.length + katakana.length;
    }

    // Checa se a quantidades de ideogramas ativados é o suficiente para conseguir ir a página de exercícios
    const checar = () => {
        let soma = checarIdeos()
        if(soma === 0) {
            setLinkPlay('/');
        }
        else {
            setLinkPlay('/exercicios');
        }
    }
    
    // Abre um aviso na tela
    const abrirAviso = () => {
        if (checarIdeos() === 0){
            avisoRef.current.style.height = '180px';
        }
    }

    // Adiciona um evento load ao body
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
            <Aviso texto='Antes de começar a praticar, clique na engrenagem e escolha os ideogramas que deseja aprender.'
            avisoRef={avisoRef}/>
        </div>
    );
}

export default BotaoIniciar;
