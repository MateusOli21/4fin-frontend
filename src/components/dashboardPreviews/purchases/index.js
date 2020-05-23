import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { formatter } from '../../../utils/priceFormatter';

import {
  HeaderPreview,
  Purchases,
  Purchase,
  Content,
  SeeMoreOpt,
} from './styles';

export default function PurchasesPreview({ isPurchasePage }) {
  const userPurchases = useSelector((state) => state.user.purchases);

  return (
    <>
      <HeaderPreview>
        <h1>Compras</h1>

        <Link to="/create_purchase">
          <span>Adicionar</span>
        </Link>
      </HeaderPreview>

      <Purchases>
        {userPurchases.map((purchase) => (
          <Purchase key={purchase.id}>
            <Content>
              <h3>{purchase.name.toUpperCase()}</h3>
              <h2>{formatter.format(purchase.value)}</h2>
              <span>
                {format(parseISO(purchase.date), 'PPPP', { locale: pt })}
              </span>
            </Content>
            <Link to={`/purchases/${purchase.id}`}>
              <span>editar</span>
            </Link>
          </Purchase>
        ))}
      </Purchases>
      {isPurchasePage === false ? (
        <></>
      ) : (
        <SeeMoreOpt>
          <Link to="/purchases">
            <span>Ver mais</span>
          </Link>
        </SeeMoreOpt>
      )}
    </>
  );
}
