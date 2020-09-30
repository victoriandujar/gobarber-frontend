import React from "react";

import { FiLogIn } from "react-icons/fi";

import Logo from "../../assets/Logo.svg";

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />

        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
