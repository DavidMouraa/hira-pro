import { useRef } from 'react';
import './styles.css';

const ConfigCard = (props) => {
    const card = useRef(null);

    return (
        <div className='config-card'>
            <div className='config-ideo'>{props.ideo}</div>
            <div className='config-roman'>{props.roman}</div>
        </div>
    );
}

export default ConfigCard;
