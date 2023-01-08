// Importes de estilos
import './styles.css';

const ExCard = (props) => {
    // Pega a resposta digitada pelo usuario
    const pegarResposta = () => {
        props.setResposta(props.inputRef.current.value.toLowerCase().trim());
    }

    // Checa se a tecla enter foi clicada
    const clicouEnter = (e) => {
        if (e.keyCode ===  13) {
            props.checarResposta();
            props.inputRef.current.focus();
        }
    }

    // Escolhe um ideograma para quando o componente for renderizado
    if (props.cardIdeo === -1) {
        props.trocaIdeo();
    }

    return (
        <section id='sc-card' className='largura-limitada'>
            <div id='box-ex-card'>
                {/* Caixa onde é mostrado o ideograma */}
                <div>
                    <div id="ex-ideograma" className='ex-card'>{props.listaIdeo[props.cardIdeo]}</div>
                </div>

                {/* Campo para digitar a resposta */}
                <input 
                id='ex-resposta' 
                type='text'
                onChange={pegarResposta}
                ref={props.inputRef}
                onKeyDown={clicouEnter}
                autoComplete='off'
                maxLength={3}
                value={props.resposta}/>
            </div>
        </section>
    );
}

export default ExCard;
