import './styles.css';

import { useState } from 'react';

import teclas from '../../javascript/listas/teclasListas';
import Tecla from '../Tecla';
import BotaoResposta from '../BotaoResposta';

const TecladoVirtual = (props) => {
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

    return (
        <div id='teclado-virtual'>
            {teclas.map((item, index) => (
                <div>
                    {teclas[index].map((tecla) => (
                        <Tecla 
                        tecla={tecla}
                        pegarDigito={pegarDigito}/>
                    ))}
                </div>
            ))}
            <BotaoResposta checarResposta={props.checarResposta}/>
        </div>
    );
}

export default TecladoVirtual;
