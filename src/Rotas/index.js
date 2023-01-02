// Importes de ferramentas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importes de componentes
import Home from "../paginas/Home";
import Exercicios from "../paginas/Exercicios";
import Configuracao from "../paginas/Configuracao";

// Componente de Rotas
const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/exercicios" element={<Exercicios/>}/>
                <Route path="/configuracao" element={<Configuracao/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
