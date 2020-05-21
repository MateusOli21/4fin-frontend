import React from 'react';

import Header from '../../../components/header';

import { Wrapper, Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
}
