import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  background: #171b40;
`;

export const Container = styled.div`
  margin: 0rem 1.5rem;

  @media (min-width: 620px) {
    margin: 0 2.75rem;
  }
`;
