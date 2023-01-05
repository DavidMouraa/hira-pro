import './styles.css';

import { Link } from 'react-router-dom';

import { Gear } from '../Icones';

const BotaoConfig = () => {
    return (
        <Link to={'/configuracao'}>
            <button id='botao-config'>
                <Gear/>
            </button>
        </Link>
    );
}

export default BotaoConfig;
