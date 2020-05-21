import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SloganContainer = styled.div`
  width: 100%;
  display: none;
  padding: 0 2rem;
  background: #1e2454;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1024px) {
    padding: 0 4.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #fff;
  margin-top: 1.5rem;

  h1 {
    font-size: 3.15rem;
    color: #f55656;
  }

  p {
    width: 90%;
    font-size: 1.1rem;
    margin: 10px 0;
  }

  img {
    width: 220px;
  }

  @media (min-width: 1240px) {
    h1 {
      font-size: 3.75rem;
    }

    p {
      width: 100%;
    }
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #171b40;

  form {
    width: 100%;
    max-width: 480px;
    padding: 1.5rem 2rem;
    text-align: center;

    input {
      width: 100%;
      display: block;
      border: 0;
      border-radius: 5px;
      margin: 14px 0;
      padding: 12px 8px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #f55656;
      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }

    button {
      width: 100%;
      padding: 12px 0;
      margin-bottom: 10px;
      font-weight: 700;
      border-radius: 5px;
      border: 0;
      color: #fff;
      background: #19a389;

      &:hover {
        background: ${darken(0.04, '#19a389')};
      }
    }

    a {
      color: #fff;

      &:hover {
        color: #f55656;
      }
    }
  }
`;
