import {useState} from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Historico from './pages/Historico'
import Erro404 from './pages/Erro404'


export default function App(){
    const[logado,setLogado] = useState(false);

    function handleLogin(event){
        setLogado(true);
    }

    function handleLogout(event){
        setLogado(false)
    }

    return(
        <BrowserRouter>
            <Routes>    
                {logado ? 
                 <>
                    <Route path="/" element={<Home onLogout={handleLogout}/>} />
                    <Route path="/perfil" element={<Perfil onLogout={handleLogout}/>}/>
                    <Route path="/historico" element={<Historico onLogin={handleLogin}/>}/>
                </>
                :
                    <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
}
                <Route path="*" element={<Erro404/>}/>
            </Routes>
        </BrowserRouter>
    )
}