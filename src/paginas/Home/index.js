import Iniciar from "../../components/Iniciar";

const Home = (props) => {
    return (
        <div>
            <Iniciar
            tema={props.tema}
            setTema={props.setTema}/>
        </div>
    );
}

export default Home;
