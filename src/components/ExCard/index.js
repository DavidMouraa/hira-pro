// Importes de estilos
import './styles.css';

// Importes de ferramentas
import { useRef, useState } from 'react';
import { pegarIdeos, pegarRoman } from '../../javascript/funcoes/pegarIdeo';

const ExCard = () => {
    // Listas dos ideogramas e dos Romanjis
    let listaIdeo = pegarIdeos(true);
    let listaRoman = pegarRoman(true);

    // Hooks para mostrar na tela
    const [cardIdeo, setCardIdeo] = useState(-1); // Ideograma do card
    const [resultado, setResultado] = useState('Qual é o ideograma abaixo'); // Mensagem do resultado

    // Hooks para pegar informações
    const [resposta, setResposta] = useState(''); // Resposta do usuario

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
        setResposta(inputRef.current.value.toLowerCase().trim());
    }

    // Checa se a resposta do usuario está correta
    const checarResposta = () => {
        if (resposta.split('').length !== 0) {
            setResultado(`${listaIdeo[cardIdeo]} =  ${listaRoman[cardIdeo]}`);
            if (resposta === listaRoman[cardIdeo]) {
                resRef.current.style.background = 'Blue';
            }
            else {
                resRef.current.style.background = 'red';
            }
            setResposta('');
            limparInput();
            trocaIdeo();
        }
        else {
            setResultado(`Digite um valor valido!`);
            resRef.current.style.background = 'gray';
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
            <div id='ex-resultado' ref={resRef}>
                <p>{resultado}</p>
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
                placeholder='Digite a Resposta'
                onChange={pegarResposta}
                ref={inputRef}
                onKeyDown={clicouEnter}
                autoComplete='off'
                autoFocus/>

                {/* Botão para confirmar a resposta */}
                <button 
                id='ex-check' 
                onClick={() => {
                checarResposta();
                }}>Confirmar</button>
            </div>
        </section>
    );
}

export default ExCard;
