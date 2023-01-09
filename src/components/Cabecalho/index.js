import './styles.css';

import BotaoFechar from '../BotaoFechar'

const Cabecalho = (props) => {
    return (
        <header>
            <div>
                <div>
                    <BotaoFechar/>
                    <h1>{props.titulo}</h1>
                </div>
            </div>
        </header>
    );
}

export default Cabecalho;
