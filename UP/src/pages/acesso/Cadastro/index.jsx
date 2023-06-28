import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import CoverImg from "../../../assets/cover-cadastro.jpg";
import Container from "../../../components/Container";
import {
  Form,
  FormInput,
  FormBtn,
  FormDivBtn,
} from "../../../components/Form";

import "./Cadastro.css";

function Cadastro() {
  return (
    <>
      <Container>
        <div className="cadastro">
          <div className="form-fields">
            <div className="form-header">
              <Link to="/">
                <img src={Logo} alt="logotipo" />
              </Link>
              <h1>Cadastre-se</h1>
            </div>

            <Form>
              <FormInput
                classe="form-input"
                htmlFor="nome"
                texto="Nome"
                tipo="text"
                id="nome"
              />
              <FormInput
                classe="form-input"
                htmlFor="email"
                texto="Email"
                tipo="email"
                id="email"
              />
              <FormInput
                classe="form-input"
                htmlFor="cpf"
                texto="CPF"
                tipo="number"
                id="cpf"
              />
              <FormInput
                classe="form-input"
                htmlFor="matricula"
                texto="Matrícula"
                tipo="number"
                id="matricula"
              />

              <fieldset className="form-fieldset">
                <legend>Sexo</legend>
                <div>
                  <label htmlFor="feminino">Feminino</label>
                  <input
                    type="radio"
                    name="sexo"
                    value="F"
                    id="feminino"
                    checked
                  />
                </div>
                <div>
                  <label htmlFor="masculino">Masculino</label>
                  <input type="radio" name="sexo" value="M" id="masculino" />
                </div>
              </fieldset>

              <FormInput
                classe="form-input"
                htmlFor="esporte"
                texto="Pratica Esporte?"
                tipo="text"
                id="esporte"
              />
              <FormInput
                classe="form-input"
                htmlFor="data-nasc"
                texto="Data de Nascimento"
                tipo="date"
                id="data-nasc"
              />
              <FormInput
                classe="form-input"
                htmlFor="senha"
                texto="Senha"
                tipo="password"
                id="senha"
              />
              <FormInput
                classe="form-input"
                htmlFor="confima-senha"
                texto="Confirme a Senha"
                tipo="password"
                id="confirma-senha"
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
          <div className="form-img">
            <img src={CoverImg} alt="Mulher se exercitando na academia" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cadastro;
