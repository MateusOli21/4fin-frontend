import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem;
  background: #1e2454;

  @media (min-width: 620px) {
    padding: 1.5rem 2.75rem;
  }
`;

export const MenuOption = styled(Link)`
  display: none;
  color: #fff;

  &:hover {
    color: #19a389;
  }

  @media (min-width: 620px) {
    display: inline;
  }
`;

export const Menu = styled.div`
  display: flex;

  ul {
    display: flex;
    align-items: center;

    li {
      padding: 0 0.5rem;
    }

    button {
      padding: 0.4rem 1.25rem;
      font-weight: 700;
      border: 0;
      border-radius: 5px;
      color: #fff;
      background: #f55656;

      &:hover {
        background: ${darken(0.05, '#f55656')};
      }
    }
  }

  @media (min-width: 620px) {
    ul {
      button {
        padding: 0.4rem 1.75rem;
      }
    }
  }
`;
