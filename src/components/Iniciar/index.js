// Importes de estilos
import './styles.css';

// Importes de componentes
import BotaoIniciar from "../BotaoIniciar";
import BotaoConfig from '../BotaoConfig';
import BotaoTema from '../BotaoTema';

const Iniciar = (props) => {
    return (
        <section id='sc-iniciar'>
            <BotaoConfig/>
            <BotaoIniciar/>
            <BotaoTema 
            tema={props.tema}
            setTema={props.setTema}/>
        </section>
    );
}

export default Iniciar;
