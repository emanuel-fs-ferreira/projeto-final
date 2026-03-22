import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "../principal/produtos"
import ProdutoEscolhido from "../principal/produtoEscolhido";
import Contato from "../asides/contato";


function RouteApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produtos/>}/>
                <Route path="/produto-escolhido" element={<ProdutoEscolhido/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp
