import Navbar from "../components/Navbar";

export default function Perfil(props){
    return(
    <>
        <Navbar onLogout={props.onLogout}/>
        <h1>Perfil</h1>
    </>
    )
}