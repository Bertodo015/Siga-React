import { Routes, Route } from "react-router-dom";
import Jogo from "../pages/jogo/Jogo";
import Header from "../components/Header/Header";
import './AppRoute.css'
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import Biblioteca from "../pages/biblioteca/Biblioteca";
import Disciplinas from "../pages/disciplinas/Disciplinas";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/jogo" element={
                <>
                    <Header titulo="Jogo" />
                    <div className="content">
                        <Nav logado={true} />
                        <Jogo />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />

            <Route path="/biblioteca" element={
                <>
                    <Header titulo="Biblioteca" />
                    <div className="content">
                        <Nav logado={true} />
                        <Biblioteca />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />

            {/*<Route path="/disciplinas" element={
                <>
                    <Header titulo="Disciplinas" />
                    <div className="content">
                        <Nav logado={true} />
                        <Disciplinas />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />*/}
        </Routes>
    )
}