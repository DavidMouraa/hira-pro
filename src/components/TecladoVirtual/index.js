// Importes de estilos
import './styles.css';

// Importes de ferramentas
import { useRef } from 'react';

// Importes de icones
import { Keyboard } from '../Icones';

// Importes de componentes
import teclas from '../../javascript/listas/teclasListas';
import Tecla from '../Tecla';
import BotaoResposta from '../BotaoResposta';

const TecladoVirtual = (props) => {
    // Declaração de useRefs
    const tecladoRef = useRef(null);

    // Verifica se o tamanho da resposta passou do limite maximo (apenas para o teclado virtual)
    const verificaTamanho = () => {
        if (props.resposta.length < 3) {
            return true;
        }
        else {
            return false;
        }
    }

    // Pega o valor da tecla que foi teclada
    const pegarDigito = (digito) => {
        if (typeof digito === 'string') {
            if (verificaTamanho()){
                props.setResposta(props.resposta + digito);
            }
        }
        else {
            props.setResposta('');
        }
    }

    // Abri e fecha o teclado dependendo do tamanho atual
    const fecharTeclado = () => {
        if(tecladoRef.current.style.height === '210px') {
            tecladoRef.current.style.height = '0px';
        }
        else {
            tecladoRef.current.style.height = '210px';
        }
    }

    return (
        <div id='teclado-virtual' className='largura-limitada'>
            <button id='botao-teclado' onClick={fecharTeclado}><Keyboard/></button>
            <div ref={tecladoRef}>
                {teclas.map((item, index1) => (
                    <div key={index1}>
                        {teclas[index1].map((tecla, index2) => (
                            <Tecla
                            key={index1 + index2}
                            tecla={tecla}
                            pegarDigito={pegarDigito}/>
                        ))}
                    </div>
                ))}
                <BotaoResposta checarResposta={props.checarResposta}/>
            </div>
        </div>
    );
}

export default TecladoVirtual;
