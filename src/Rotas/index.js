// Importes de ferramentas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importes de componentes
import Home from "../paginas/Home";
import Exercicios from "../paginas/Exercicios";

// Componente de Rotas
const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/exercicios" element={<Exercicios/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
