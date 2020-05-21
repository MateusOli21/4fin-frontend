import React from 'react';

import logo from '../../../assets/logo.svg';
import { Wrapper, LoginContainer, SloganContainer, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <LoginContainer>
        <img src={logo} alt="4fin" />
        {children}
      </LoginContainer>
      <SloganContainer>
        <Content>
          <h1>Gaste menos. Guarde mais.</h1>
          <p>
            O app para você gerenciar suas despesas de maneira simples e rápida.
          </p>
        </Content>
      </SloganContainer>
    </Wrapper>
  );
}
