import styled from 'styled-components';
import { darken } from 'polished';

export const HeaderPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0 0;

  h1 {
    color: #fff;
  }

  span {
    color: #19a389;
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid #19a389;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover {
      color: ${darken(0.04, '#19a389')};
    }
  }
`;

export const SeeMoreOpt = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;

  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
      color: ${darken(0.04, '#19a389')};
    }
  }
`;

export const Purchases = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 1.25rem;
  padding: 1.75rem 0;
`;

export const Purchase = styled.div`
  padding: 1.5rem 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  color: #fff;
  background: #1e2454;
  border: 0;
  border-radius: 10px;

  a {
    color: #fff;
    font-weight: 700;

    &:hover {
      color: #f55656;
    }
  }
`;

export const Content = styled.div`
  text-align: left;

  h3 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1.75rem;
    padding: 0.5rem 0;
    color: #f55656;
  }

  span {
    color: #fff;
    font-size: 0.75rem;
    margin-right: 6px;
  }
`;
