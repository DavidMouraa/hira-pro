import Iniciar from "../../components/Iniciar";

const Home = (props) => {
    return (
        <div className="largura-limitada">
            <Iniciar
            tema={props.tema}
            setTema={props.setTema}/>
        </div>
    );
}

export default Home;
