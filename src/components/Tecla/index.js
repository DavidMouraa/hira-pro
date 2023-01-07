import './styles.css';

const Tecla = (props) => {
    return (
        <button className='botao-tecla' onClick={() => props.pegarDigito(props.tecla)}>
            {props.tecla}
        </button>
    );
}

export default Tecla;
