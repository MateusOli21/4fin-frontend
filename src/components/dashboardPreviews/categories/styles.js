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
    background: transparent;
    border: 1px solid #19a389;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 12px;

    &:hover {
      color: ${darken(0.04, '#19a389')};
    }
  }
`;

export const SeeMoreOpt = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
      color: ${darken(0.04, '#19a389')};
    }
  }
`;

export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.25rem;
  padding: 1.75rem 0;
`;

export const Category = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  background: #1e2454;
  border: 0;
  border-radius: 10px;

  h3 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1.75rem;
    padding: 0.5rem 0;
    color: #19e389;
  }

  span {
    color: #fff;
  }
`;
