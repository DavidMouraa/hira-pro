// Importes de ferramentas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importes de componentes
import Home from "../paginas/Home";

// Componente de Rotas
const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
