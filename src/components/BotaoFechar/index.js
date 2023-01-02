import './styles.css';

import { Link } from "react-router-dom";

const BotaoFechar = () => {
    return (
        <Link to={'/'} className='button-close'>Fechar</Link>
    );
}

export default BotaoFechar;
