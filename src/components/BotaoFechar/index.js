import './styles.css';

import { Link } from "react-router-dom";

const BotaoFechar = () => {
    return (
        <Link to={'/'} className='button-close'><img src='./assets/icons/arrow.svg'/></Link>
    );
}

export default BotaoFechar;
