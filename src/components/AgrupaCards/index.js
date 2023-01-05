import './styles.css';

import { useEffect, useRef, useState } from "react";

const AgrupaCards = (props) => {
    const [ativadoTema, setAtivadoTema] = useState('tema-agrupa-desativado');

    const agrupamento = useRef(null);

    const ativadoStyle = () => {
        if(props.ativado) {
            setAtivadoTema('tema-agrupa-ativado');
            agrupamento.current.style.borderBottomWidth = '1px';
        }
        else {
            setAtivadoTema('tema-agrupa-desativado');
            agrupamento.current.style.borderBottomWidth = '4px';
        }
    }

    const trocarStatus = () => {
        props.switch(props.grupo, props.index);
    }

    const trocarSwitch = () => {
        props.state(!props.ativado);
    }

    useEffect(() => {
        document.body.addEventListener('load', ativadoStyle());
    });

    return (
        <div className={`agrupamento ${ativadoTema}`} onClick={trocarStatus} onMouseEnter={trocarSwitch} ref={agrupamento}>
            {props.children}
        </div>
    )
}

export default AgrupaCards;
