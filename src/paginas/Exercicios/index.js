import './styles.css';

import { Circle, Cross, Line } from '../../components/Icones';

import { useState, useRef } from 'react';
import { pegarIdeos, pegarRoman } from '../../javascript/funcoes/pegarIdeo';

// Importes de componentes
import ExCard from "../../components/ExCard";
import Cabecalho from "../../components/Cabecalho";
import TecladoVirtual from "../../components/TecladoVirtual";
import Resultado from '../../components/Resultado';

const Exercicios = () => {
    // Listas dos ideogramas e dos Romanjis
    let listaIdeo = pegarIdeos(true);
    let listaRoman = pegarRoman(true);

    // Hooks para pegar informações
    const [resposta, setResposta] = useState(''); // Resposta do usuario

    // Hooks para mostrar na tela
    const [cardIdeo, setCardIdeo] = useState(-1); // Ideograma do card
    const [resultado, setResultado] = useState(<Line/>); // Mensagem do resultado
    const [temaResultado, setTemaResultado] = useState('tema-neutro');

    // Hooks para fazer referencia a um elemento
    const inputRef = useRef(null); // Referencia ao input de texto
    const resRef = useRef(null); // Referencia a div de resultado

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
    }

    // Checa se a resposta do usuario está correta
    const checarResposta = () => {
        console.log('entrou')
        if (resposta.split('').length !== 0) {
            if (resposta === listaRoman[cardIdeo]) {
                setResultado(<Circle/>);
                setTemaResultado('tema-correto')
            }
            else {
                setResultado(<Cross/>);
                setTemaResultado('tema-errado');
            }
            setResposta('');
            limparInput();
            trocaIdeo();
        }
        else {
            setResultado(<Line/>)
            setTemaResultado('tema-neutro');
            limparInput();
        }
    }

    return (
        <div id='sc-exercicios'>
            <Cabecalho titulo='Exercícios'/>
            <Resultado
            temaResultado={temaResultado}
            resRef={resRef}
            resultado={resultado}/>

            <ExCard
            resposta={resposta}
            setResposta={setResposta}
            checarResposta={checarResposta}
            trocaIdeo={trocaIdeo}
            inputRef={inputRef}
            cardIdeo={cardIdeo}
            resultado={resultado}
            listaIdeo={listaIdeo}/>

            <TecladoVirtual
            resposta={resposta}
            setResposta={setResposta}
            checarResposta={checarResposta}/>
        </div>
    );
}

export default Exercicios;
