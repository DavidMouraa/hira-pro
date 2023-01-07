import './styles.css';

import { Send } from "../Icones";

const BotaoResposta = (props) => {
    return (
        <button id='botao-resposta' onClick={props.checarResposta}>
            <Send/>
        </button>
    );
}

export default BotaoResposta;
