// Importes de estilos
import './styles.css';

// Importes de componentes
import BotaoIniciar from "../BotaoIniciar";
import BotaoConfig from '../BotaoConfig';

const Iniciar = () => {
    return (
        <section id='sc-iniciar'>
            <BotaoConfig/>
            <BotaoIniciar/>
        </section>
    );
}

export default Iniciar;
