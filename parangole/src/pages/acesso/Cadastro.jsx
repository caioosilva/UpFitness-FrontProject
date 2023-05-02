import Logo from './../../assets/logo.png';
import CoverImg from './../../assets/cover-cadastro.jpg';
import { Link } from 'react-router-dom';

import './Acesso.css';

function Cadastro() {
  return (
    <>
      <div className='container content'>
        <div className='cadastro'>
          <div className='form-fields'>
            <div className='form-header'>
              <Link to="/">
                <img src={Logo} alt="logotipo" />
              </Link>
              <h1>Cadastre-se</h1>
            </div>

            <form action="#">
              <div className='form-input'>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="Nome" />
              </div>

              <div className='form-input'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>

              <fieldset className='form-fieldset'>
                <legend>Sexo</legend>
                <label htmlFor="feminino">Feminino</label>
                <input type="radio" name="sexo" value="F" id="feminino" checked />
                <label htmlFor="masculino">Masculino</label>
                <input type="radio" name="sexo" value="M" id="masculino" />
              </fieldset>

              <div className='form-input'>
                <label htmlFor="cpf">CPF</label>
                <input type="number" id="cpf" />
              </div>

              <div className='form-input'>
                <label htmlFor="matricula">Matrícula</label>
                <input type="number" id="matricula" />
              </div>

              <div className='form-input'>
                <label htmlFor="esporte">Pratica Esporte</label>
                <input type="text" id="esporte" />
              </div>

              <div className='form-input'>
                <label htmlFor="nascimento">Data de Nascimento</label>
                <input type="date" id="Nascimento" />
              </div>

              <div className='form-input'>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" />
              </div>

              <div className='form-input'>
                <label htmlFor="senha2">Confirme a senha</label>
                <input type="password" id="senha2" />
              </div>

              <div className='form-btn'>
                <Link to="/recuperar-senha" className='link'>
                  Esqueci a senha
                </Link>
                <button className='btn'>Cadastre-se</button>
                <p>
                  Já possui uma conta? <Link to="/login">Faça login</Link>
                </p>
              </div>
            </form>
          </div>
          <div className='form-img'>
            <img src={CoverImg} alt="Mulher se exercitando na academia" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;