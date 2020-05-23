import React from 'react';

import Overview from '../../components/dashboardPreviews/overview';
import CategoriesPreview from '../../components/dashboardPreviews/categories';
import PurchasesPreview from '../../components/dashboardPreviews/purchases';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <Overview />
      <CategoriesPreview isHomePage={true} />
      <PurchasesPreview isHomePage={true} />
    </Container>
  );
}

export default Dashboard;
