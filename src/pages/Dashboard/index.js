import React from 'react';

import CategoriesPreview from '../../components/dashboardPreviews/categories';
import PurchasesPreview from '../../components/dashboardPreviews/purchases';

import { Container, Overview, Content } from './styles';

function Dashboard() {
  return (
    <Container>
      <Overview>
        <h1>Visão geral</h1>
        <Content>
          <h2>Limite de gastos: R$1.500,00</h2>
          <h2>Saldo disponível: R$1.265,00</h2>
          <h2>Total de gastos: R$335,00</h2>
        </Content>
      </Overview>
      <CategoriesPreview />
      <PurchasesPreview />
    </Container>
  );
}

export default Dashboard;
