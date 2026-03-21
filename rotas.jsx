import { BrowserRouter, Routes, Route } from "react-router-dom";
import Itens from "../principal/Itens";
import Produtos from "../principal/produtos"

function RouteApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produtos/>}/>
                <Route path="/product" element={<detalheProdutos/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp