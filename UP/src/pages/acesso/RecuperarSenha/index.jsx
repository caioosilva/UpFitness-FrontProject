import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./RecuperarSenha.css";
import Container from "../../../components/Container";

function RecuperarSenha() {
  return (
    <>
      <Container>
          <div className="form">
            <div className="form-header">
              <Link to="/">
                <img src={Logo} alt="logotipo" />
              </Link>
              <h1>Esqueceu a senha?</h1>
              <p>
                Digite o endereço de e-mail que você usou no cadastro que
                enviaremos instruções para redefinir sua senha.
              </p>
            </div>

            <form action="#">
              <div className="form-input">
                <label htmlFor="email">Email de recuperação</label>
                <input type="email" id="email" />
              </div>

              <div className="form-btn">
                <button className="btn">Enviar Email</button>
                <p>
                  Ainda não possui uma conta? <Link to="/cadastro" className="link">Criar conta</Link>
                </p>
              </div>
            </form>
          </div>
      </Container>
    </>
  );
}

export default RecuperarSenha;
