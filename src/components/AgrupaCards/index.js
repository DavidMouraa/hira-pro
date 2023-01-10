import './styles.css';

import { useEffect, useRef, useState } from "react";

const AgrupaCards = (props) => {
    // Declaração dos useStates
    const [ativadoTema, setAtivadoTema] = useState('tema-agrupa-desativado');
    const [agrupaStatus, setAgrupaStatus] = useState(false);

    // Declaração dos useRefs
    const agrupamento = useRef(null);

    // Troca entre o tema ativado e desativado
    const ativadoStyle = () => {
        if(props.grupo.lista[props.index].ativado) {
            setAtivadoTema('tema-agrupa-ativado');
            agrupamento.current.style.borderBottomWidth = '1px';
        }
        else {
            setAtivadoTema('tema-agrupa-desativado');
            agrupamento.current.style.borderBottomWidth = '4px';
        }
        setAgrupaStatus(props.grupo.lista[props.index].ativado);
    }

    // Troca o estado entre o tema ativado e desativado
    const trocarStatus = () => {
        setAgrupaStatus(!agrupaStatus);
        props.switch(props.grupo, props.index, agrupaStatus);
    }

    // Adiciona evento load ao body
    useEffect(() => {
        document.body.addEventListener('load', ativadoStyle());
    });

    return (
        <div className={`agrupamento ${ativadoTema}`}
        onClick={() => {
        trocarStatus();}}
        ref={agrupamento}>
            {props.children}
        </div>
    )
}

export default AgrupaCards;
