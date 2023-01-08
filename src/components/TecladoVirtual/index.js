import './styles.css';

import { useRef, useState } from 'react';

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
        if(tecladoRef.current.style.height === '160px') {
            tecladoRef.current.style.height = '0px';
        }
        else {
            tecladoRef.current.style.height = '160px';
        }
    }

    return (
        <div id='teclado-virtual' className='largura-limitada'>
            <button id='botao-teclado' onClick={fecharTeclado}><Keyboard/></button>
            <div ref={tecladoRef}>
                {teclas.map((item, index) => (
                    <div>
                        {teclas[index].map((tecla) => (
                            <Tecla
                            tecla={tecla}
                            pegarDigito={pegarDigito}/>
                        ))}
                    </div>
                ))}
            </div>
            <BotaoResposta checarResposta={props.checarResposta}/>
        </div>
    );
}

export default TecladoVirtual;
