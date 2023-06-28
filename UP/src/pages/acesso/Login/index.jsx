import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./login.css";
import Container from "../../../components/Container";
import { Form, FormInput, FormBtn, FormDivBtn } from "../../../components/Form";

function Login() {
  return (
    <>
      <Container>
        <div className="form">
          <div className="form-header">
            <Link to="/">
              <img src={Logo} alt="logotipo" />
            </Link>
            <h1>Login</h1>
          </div>

          <Form classe="teste">
            <FormInput
              classe="form-input"
              htmlFor="email"
              texto="Email"
              tipo="email"
              id="email"
            />
            <FormInput
              classe="form-input"
              htmlFor="senha"
              texto="Senha"
              tipo="password"
              id="senha"
            />

            <FormDivBtn classe="form-btn">
              <FormBtn
                link="/recuperar-senha"
                classeLink="link"
                texto="Esqueci a senha"
              />
              <FormBtn link="/perfil" classeLink="btn" texto="Entrar" />

              <p>
                Ainda não possui uma conta?
                <FormBtn
                  classe="form-btn"
                  link="/cadastro"
                  classeLink="link"
                  texto="Cadastre-se"
                />
              </p>
            </FormDivBtn>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Login;
