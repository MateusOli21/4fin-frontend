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
    width: 100%;
    max-width: 540px;
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
        background: ${darken(0.05, '#19a389')};
      }

      &:last-child {
        background: #f55656;

        &:hover {
          background: ${darken(0.05, '#f55656')};
        }
      }
    }
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;
