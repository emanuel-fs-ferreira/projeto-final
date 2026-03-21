import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "../principal/produtos"

function RouteApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produtos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp
