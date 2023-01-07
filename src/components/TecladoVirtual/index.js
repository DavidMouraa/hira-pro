import './styles.css';

import teclas from '../../javascript/listas/teclasListas';
import Tecla from '../Tecla';
import { useState } from 'react';

const TecladoVirtual = (props) => {
    const [texto, setTexto] = useState();

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
        </div>
    );
}

export default TecladoVirtual;
