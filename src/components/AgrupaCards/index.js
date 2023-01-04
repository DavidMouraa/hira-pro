import { useEffect, useRef } from "react";

const AgrupaCards = (props) => {
    const agrupamento = useRef(null);

    const ativadoStyle = () => {
        if(props.ativado) {
            agrupamento.current.style.borderBottomWidth = '1px';
        }
        else {
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
        <div onClick={trocarStatus} onMouseEnter={trocarSwitch} ref={agrupamento}>
            {props.children}
        </div>
    )
}

export default AgrupaCards;
