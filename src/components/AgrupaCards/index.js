import './styles.css';

import { useEffect, useRef, useState } from "react";

const AgrupaCards = (props) => {
    const [ativadoTema, setAtivadoTema] = useState('tema-agrupa-desativado');

    const agrupamento = useRef(null);

    const [agrupaStatus, setAgrupaStatus] = useState(false)

    const ativadoStyle = () => {
        if(props.grupo.lista[props.index].ativado) {
            setAtivadoTema('tema-agrupa-ativado');
            setAgrupaStatus(true);
            agrupamento.current.style.borderBottomWidth = '1px';
        }
        else {
            setAtivadoTema('tema-agrupa-desativado');
            setAgrupaStatus(false);
            agrupamento.current.style.borderBottomWidth = '4px';
        }
    }

    const trocarStatus = () => {
        setAgrupaStatus(!agrupaStatus);
        props.switch(props.grupo, props.index, agrupaStatus);
    }

    useEffect(() => {
        document.body.addEventListener('load', ativadoStyle());
    });

    return (
        <div className={`agrupamento ${ativadoTema}`} onClick={() => {
        trocarStatus();}}
        ref={agrupamento}>
            {props.children}
        </div>
    )
}

export default AgrupaCards;
