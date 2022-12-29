// Importes de estilos
import './styles.css';

// Importes de Ferramentas
import { useRef, useState } from 'react';
import { pegarIdeos, pegarRoman } from '../../javascript/funcoes/pegarIdeo';

const ExCard = () => {
    let listaIdeo = pegarIdeos();
    let listaRoman = pegarRoman();

    const [cardIdeo, setCardIdeo] = useState(-1);

    const [texto, setTexto] = useState('');
    const [resposta, setResposta] = useState('');

    const inputRef = useRef(null);

    const trocaIdeo = () => {
        let index = Math.floor(Math.random() * listaIdeo.length);
        setCardIdeo(index);
    }

    const limparInput = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    const pegarResposta = () => {
        setTexto(inputRef.current.value);
    }

    const checarResposta = () => {
        console.log(`Resposta: ${listaRoman[cardIdeo]}`);
        console.log(`Texto: ${texto.toLowerCase()}`);
        if (texto.toLowerCase() === listaRoman[cardIdeo]) {
            setResposta('Acertou!');
        }
        else {
            setResposta('Errou!');
        }
    }

    if (cardIdeo === -1) {
        trocaIdeo();
    }

    return (
        <section id='sc-card'>
            <div id='box-ex-card'>
                <div>
                    <div id="ex-ideograma" className='ex-card'>{listaIdeo[cardIdeo]}</div>
                </div>

                <input 
                id='ex-resposta' 
                type='text' 
                placeholder='Digite a Resposta'
                onChange={pegarResposta}
                ref={inputRef}
                autoFocus/>

                <button 
                id='ex-check' 
                onClick={() => {
                checarResposta()
                limparInput()
                trocaIdeo();
                }}>Check</button>
            </div>
            <div>{resposta}{listaRoman[cardIdeo]}</div>
        </section>
    );
}

export default ExCard;
