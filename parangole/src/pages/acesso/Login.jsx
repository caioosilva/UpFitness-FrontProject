import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.png';
import './Acesso.css';

function Login() {
  return (
    <>
      <div className='container content'>
        <div className='form'>
          <div className='container360'>
            <div className='form-header'>
              <Link to="/">
                <img src={Logo} alt="logotipo" />
              </Link>
              <h1>Login</h1>
            </div>

            <form>
              <div className='form-input'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>

              <div className='form-input'>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" />
              </div>

              <div className='form-btn'>
                <Link to="/recuperar-senha" className='link'>
                  Esqueci a senha
                </Link>
                <button className='btn'>Entrar</button>
                <p>
                  Ainda não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
