import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #fff;
    padding: 2rem 0 1rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 1.5rem;
  padding: 2rem 1.75rem;
  border: 0;
  border-radius: 1px;
  background: #1e2454;
  color: #fff;

  h2 {
    width: 100%;
    font-size: 1.25rem;
    text-align: left;
  }

  @media (min-width: 720px) {
    h2 {
      font-size: 1.5rem;
      text-align: center;

      &:first-child {
      }
    }
  }
`;
