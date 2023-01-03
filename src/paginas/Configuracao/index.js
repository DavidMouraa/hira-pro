import HiraganaConfig from "../../components/HiraganaConfig";
import Cabecalho from "../../components/Cabecalho";

const Configuracao = () => {
    return (
        <main className="limited-width">
            <Cabecalho titulo='Hiragana'/>
            <HiraganaConfig/>
        </main>
    );
}

export default Configuracao;
