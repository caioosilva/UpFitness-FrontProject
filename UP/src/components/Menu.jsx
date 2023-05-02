import { Link } from 'react-router-dom';
import  './Button.css';

function Home() {
  return (
    <div>
      <ul>
        <li><Link className='btn' to="/cadastro">Cadastre-se</Link></li>
        <li><Link className='btn-alt' to="/login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Home;