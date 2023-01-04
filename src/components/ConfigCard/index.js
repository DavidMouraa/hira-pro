import './styles.css';

const ConfigCard = (props) => {
    return (
        <div className='config-card'>
            <div className='config-ideo'>{props.ideo}</div>
            <div className='config-roman'>{props.roman}</div>
        </div>
    );
}

export default ConfigCard;
