import './styles.css';

const Tecla = (props) => {
    return (
        <button className='botao-tecla' onClick={() => {
            props.pegarDigito(props.tecla);
            window.navigator.vibrate(30)}}>
            {props.tecla}
        </button>
    );
}

export default Tecla;
