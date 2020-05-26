import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  color: #fff;

  h1 {
    font-size: 1.5rem;
  }

  form {
    text-align: center;

    input {
      width: 100%;
      display: block;
      border: 0;
      border-radius: 5px;
      margin: 8px 0 16px;
      padding: 12px 8px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #f55656;
      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }

    button {
      background: #19a389;

      &:hover {
        background: ${darken(0.05, '#19a389')};
      }
    }
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 540px;
  width: 100%;
  padding: 1.5rem 2rem;

  label {
    width: 100%;
    display: flex;
    text-align: left;
    color: rgba(255, 255, 255, 0.75);
    margin-top: 1rem;
  }

  button {
    width: 100%;
    padding: 12px 0;
    margin-top: 10px;
    font-weight: 700;
    border-radius: 5px;
    border: 0;
    color: #fff;
    background: #f55656;
    &:hover {
      background: ${darken(0.05, '#f55656')};
    }
  }

  a {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75rem;
    font-weight: 700;
    color: #fff;

    &:hover {
      color: #19a389;
    }
  }
`;
