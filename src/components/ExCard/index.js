// Importes de estilos
import './styles.css';

import { Circle, Cross, Line } from '../Icones';

// Importes de ferramentas
import { useRef, useState } from 'react';
import { pegarIdeos, pegarRoman } from '../../javascript/funcoes/pegarIdeo';

const ExCard = (props) => {
    // Listas dos ideogramas e dos Romanjis
    let listaIdeo = pegarIdeos(true);
    let listaRoman = pegarRoman(true);

    // Hooks para mostrar na tela
    const [cardIdeo, setCardIdeo] = useState(-1); // Ideograma do card
    const [resultado, setResultado] = useState(<Line/>); // Mensagem do resultado
    const [temaResultado, setTemaResultado] = useState('tema-neutro');

    // Hooks para fazer referencia a um elemento
    const inputRef = useRef(null); // Referencia ao input de texto
    const resRef = useRef(null); // Referencia a div de resultado

    // Muda o ideograma que vai aparecer na tela, por meio de um número aleatorio
    const trocaIdeo = () => {
        let index = Math.floor(Math.random() * listaIdeo.length);
        while (index === cardIdeo) {
            index = Math.floor(Math.random() * listaIdeo.length);
        }
        setCardIdeo(index)
    }

    // Limpa o campo de resposta e foca no mesmo
    const limparInput = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    // Pega a resposta digitada pelo usuario
    const pegarResposta = () => {
        props.setResposta(inputRef.current.value.toLowerCase().trim());
    }

    // Checa se a resposta do usuario está correta
    const checarResposta = () => {
        if (props.resposta.split('').length !== 0) {
            if (props.resposta === listaRoman[cardIdeo]) {
                setResultado(<Circle/>);
                setTemaResultado('tema-correto')
            }
            else {
                setResultado(<Cross/>);
                setTemaResultado('tema-errado');
            }
            props.setResposta('');
            limparInput();
            trocaIdeo();
        }
        else {
            setResultado(<Line/>)
            setTemaResultado('tema-neutro');
            limparInput();
        }
    }

    // Checa se a tecla enter foi clicada
    const clicouEnter = (e) => {
        if (e.keyCode ===  13) {
            checarResposta();
        }
    }

    // Escolhe um ideograma para quando o componente for renderizado
    if (cardIdeo === -1) {
        trocaIdeo();
    }

    return (
        <section id='sc-card' className='largura-limitada'>
            {/* Campo onde é mostrado resultado */}
            <div id='ex-resultado' className={temaResultado} ref={resRef}>
                {resultado}
            </div>

            <div id='box-ex-card'>
                {/* Caixa onde é mostrado o ideograma */}
                <div>
                    <div id="ex-ideograma" className='ex-card'>{listaIdeo[cardIdeo]}</div>
                </div>

                {/* Campo para digitar a resposta */}
                <input 
                id='ex-resposta' 
                type='text'
                onChange={pegarResposta}
                ref={inputRef}
                onKeyDown={clicouEnter}
                autoComplete='off'
                maxLength={3}
                value={props.resposta}
                autoFocus/>
            </div>
        </section>
    );
}

export default ExCard;
