import React from 'react';
import { useSelector } from 'react-redux';

import { formatter } from '../../../utils/priceFormatter';

import { Container, Content } from './styles';

export default function Overview() {
  const spendLimit = useSelector((state) => state.user.profile.spend_limit);
  const purchases = useSelector((state) => state.user.purchases);

  const totalAmmountPurchases = purchases
    .map((purchase) => purchase.value)
    .reduce((prev, next) => prev + next);

  const balanceAvailable = spendLimit - totalAmmountPurchases;

  return (
    <Container>
      <h1>Visão geral</h1>

      <Content>
        <h2>
          Limite de gastos:
          <span style={{ color: '#19e389' }}>
            {` ${formatter.format(spendLimit)}`}
          </span>
        </h2>

        <h2>
          Saldo disponível:
          {balanceAvailable > 0 ? (
            <span style={{ color: '#19e389' }}>
              {` ${formatter.format(balanceAvailable)}`}
            </span>
          ) : (
            <span style={{ color: '#e55656' }}>
              {` ${formatter.format(0)}`}
            </span>
          )}
        </h2>

        <h2>
          Total de gastos:
          <span style={{ color: '#e55656' }}>
            {` ${formatter.format(totalAmmountPurchases)}`}
          </span>
        </h2>
      </Content>
    </Container>
  );
}
