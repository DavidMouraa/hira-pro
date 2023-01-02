import './styles.css';

import { Link } from 'react-router-dom';

const BotaoConfig = () => {
    return (
        <Link to={'/configuracao'}>
            <button id='botao-config'>
                <img src="./assets/icons/gear.svg"/>
            </button>
        </Link>
    );
}

export default BotaoConfig;
