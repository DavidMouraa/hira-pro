import './styles.css';

import { Link } from "react-router-dom";

import { Arrow } from '../Icones';

const BotaoFechar = () => {
    return (
        <Link to={'/'} className='button-close'><Arrow/></Link>
    );
}

export default BotaoFechar;
