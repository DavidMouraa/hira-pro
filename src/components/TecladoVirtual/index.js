import './styles.css';

import { useRef } from 'react';

import { Keyboard } from '../Icones';

import teclas from '../../javascript/listas/teclasListas';
import Tecla from '../Tecla';
import BotaoResposta from '../BotaoResposta';

const TecladoVirtual = (props) => {
    const tecladoRef = useRef(null);

    const verificaTamanho = () => {
        if (props.resposta.length < 3) {
            return true;
        }
        else {
            return false;
        }
    }

    const pegarDigito = (digito) => {
        if (typeof digito === 'string')
        {
            if (verificaTamanho()){
                props.setResposta(props.resposta + digito);
            }
        }
        else {
            console.log();
            props.setResposta('');
        }
    }

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
