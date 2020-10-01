import styled from "styled-components";
import { shade } from "polished";

import Image_SignUp from "../../assets/Imagem2.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 88px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      background: #ff9000;
      border: 0;
      border-radius: 10px;
      padding: 0 16px;
      height: 56px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.4s;

      &:hover {
        background: ${shade(0.2, "#ff9000")};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#f4ede8")};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${Image_SignUp}) no-repeat center;
  background-size: cover;
`;
