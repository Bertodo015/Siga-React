import { Routes, Route } from "react-router-dom";
import Jogo from "../pages/jogo/Jogo";
import Header from "../components/Header/Header";
import './AppRoute.css'

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/jogo" element={
                <>
                    <Header titulo="Jogo" />
                    <Jogo />
                </>  
            } />
        </Routes>
    )
}