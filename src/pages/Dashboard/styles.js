import styled from 'styled-components';

/*azul-cd#1e2454  azul-bg#171b40 vermelho#f55656 verde#19a389*/
export const Container = styled.div`
  padding-top: 2rem;
`;

export const Overview = styled.div`
  h1 {
    color: #fff;
    padding: 2rem 0 1rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  padding: 2rem 1.5rem;
  border: 0;
  border-radius: 10px;
  background: #1e2454;
  color: #fff;

  h2 {
    font-size: 1.25rem;
  }

  @media (min-width: 720px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Purchases = styled.div``;
