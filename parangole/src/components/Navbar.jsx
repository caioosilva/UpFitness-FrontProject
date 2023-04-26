import {NavLink, useNavigate } from "react-router-dom"
export default function Navbar(props){
    const navigate = useNavigate()

    function handleClick(event){
        props.onLogout(event)
        navigate('/login')
    }

    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="perfil">Perfil</NavLink></li>
            <li><NavLink to="historico">Historico</NavLink></li>
            <li><button onClick={handleClick}>Sair</button></li>
        </ul>
    )
}