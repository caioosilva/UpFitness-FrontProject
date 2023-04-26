import Navbar from "../components/Navbar";

export default function Home(props){
    return(
    <>
        <Navbar onLogout={props.onLogout}/>
        <h1>Home</h1>
    </>
    )
}