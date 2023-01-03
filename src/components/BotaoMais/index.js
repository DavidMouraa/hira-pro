import './styles.css';

const BotaoMais = (props) => {
    return (
        <button className='botao-mais'
        onClick={() => {
            props.minimizar(props.grupo);
        }}>{props.texto}</button>
    );
}

export default BotaoMais;
