import { useState } from "react";

import { IdeoGrupos } from "../../components/IdeoGrupos";
import Cabecalho from "../../components/Cabecalho";

const Configuracao = () => {
    const [titulo, setTitulo] = useState();
    const [ideoTipo, setIdeoTipo] = useState('hiragana');

    return (
        <main className="limited-width">
            <Cabecalho 
            titulo={titulo}
            ideoTipo={ideoTipo}
            setIdeoTipo={setIdeoTipo}/>
            <IdeoGrupos 
            setTitulo={setTitulo}
            ideoTipo={ideoTipo}/>
        </main>
    );
}

export default Configuracao;
