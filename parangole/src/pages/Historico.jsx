import Navbar from "../components/Navbar";

export default function Historico(props){
    return(
    <>
        <Navbar onLogout={props.onLogout}/>
        <h1>Historico</h1>
    </>
    )
}