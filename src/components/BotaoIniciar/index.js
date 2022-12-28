// Importes de estilos
import './styles.css';

// Importes de ferramentas
import { Link } from 'react-router-dom';

const BotaoIniciar = () => {
    return (
        <Link to={'/exercicios'} id='botao-iniciar'>
            Iniciar
        </Link>
    );
}

export default BotaoIniciar;
