import './styles.css';

import { useState } from "react";

import { IdeoGrupos } from "../../components/IdeoGrupos";
import Cabecalho from "../../components/Cabecalho";

const Configuracao = () => {
    const [titulo, setTitulo] = useState();
    const [ideoTipo, setIdeoTipo] = useState('hiragana');

    return (
        <main id="configuracoes" className="limited-width">
            <Cabecalho 
            titulo={titulo}/>
            <IdeoGrupos 
            setTitulo={setTitulo}
            ideoTipo={ideoTipo}
            setIdeoTipo={setIdeoTipo}/>
        </main>
    );
}

export default Configuracao;
