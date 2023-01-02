import './styles.css';

const ConfigCard = (props) => {
    return (
        <div className='config-card'>
            <div>{props.ideo}</div>
            <div>{props.roman}</div>
        </div>
    );
}

export default ConfigCard;
