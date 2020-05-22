import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';
import { formatter } from '../../../utils/priceFormatter';

import { HeaderPreview, Purchases, Purchase, Content } from './styles';

export default function PurchasesPreview({ isPurchasePage }) {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    async function loadPurchases() {
      const response = await api.get('purchases');
      setPurchases(response.data);
      console.log(response.data);
    }

    loadPurchases();
  }, []);

  return (
    <>
      <HeaderPreview>
        <h1>Compras</h1>
        {isPurchasePage === false ? (
          <></>
        ) : (
          <Link to="/purchases">
            <span>ver mais</span>
          </Link>
        )}
      </HeaderPreview>

      <Purchases>
        {purchases.map((purchase) => (
          <Purchase key={purchase.id}>
            <Content>
              <h3>{purchase.name.toUpperCase()}</h3>
              <h2>{formatter.format(purchase.value)}</h2>
              <span>
                {format(parseISO(purchase.date), 'PPPP', { locale: pt })}
              </span>
            </Content>
            <Link to="/update_purchase">
              <span>editar</span>
            </Link>
          </Purchase>
        ))}
      </Purchases>
    </>
  );
}
