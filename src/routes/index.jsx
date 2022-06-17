import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CadastroForm } from "../pages/Cadastro"
import { Login } from "../pages/Login"
import { HomeInicial } from "../pages/Home"
import { Painel } from "../pages/fruta.jsx"


export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro" exact element={<CadastroForm />} />
                <Route path="/home" exact element={<HomeInicial />} /> 
                <Route path="/painel" exact element={<Painel />} /> 
            </Routes>
        </Router>

    )
    
    }
