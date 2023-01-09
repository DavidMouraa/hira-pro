import { useRef } from 'react';
import './styles.css';

const Aviso = (props) => {
    const fecharAviso = () => {
        props.avisoRef.current.style.height = '0px';
    }

    return (
        <div id='box-aviso' ref={props.avisoRef}>
            <div>
                <p>{props.texto}</p>
                <button onClick={fecharAviso}>Ok</button>
            </div>
        </div>
    );
}

export default Aviso;
