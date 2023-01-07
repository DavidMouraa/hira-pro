import './styles.css';

const Resultado = (props) => {
    return (
        // Campo onde é mostrado resultado
        <div id='ex-resultado' className={props.temaResultado} ref={props.resRef}>
            {props.resultado}
        </div>
    );
}

export default Resultado;
