import { useRef, useState } from 'react';
import './styles.css';

const BotaoMais = (props) => {
    const [ativado, setAtivado] = useState(true);

    const botaoMais = useRef(null);

    const clicou = () => {
        if(ativado) {
            botaoMais.current.style.backgroundColor = 'black';
            botaoMais.current.style.color = 'white';
        }
        else {
            botaoMais.current.style.backgroundColor = 'white';
            botaoMais.current.style.color = 'black';
        }
        setAtivado(!ativado);
    }

    return (
        <button className='botao-mais'
        ref={botaoMais}
        onClick={() => {
            props.minimizar(props.grupo);
            clicou();
        }}>{props.texto}</button>
    );
}

export default BotaoMais;
