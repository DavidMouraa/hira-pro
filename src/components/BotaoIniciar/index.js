// Importes de estilos
import './styles.css';

// Importes de ferramentas
import { Link } from 'react-router-dom';

const BotaoIniciar = () => {
    return (
        <Link to={'/exercicios'}>
            <button id='botao-iniciar'>
                <img src='./assets/icons/play.svg'/>
            </button>
        </Link>
    );
}

export default BotaoIniciar;
