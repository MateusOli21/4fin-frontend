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

export default function PurchasesPreview({ isHomePage }) {
  var purchases = useSelector((state) => state.user.purchases);

  if (isHomePage) {
    purchases = purchases.slice(0, 4);
  }

  return (
    <>
      <HeaderPreview>
        <h1>Compras</h1>

        <Link to="/create_purchase">
          <span>Adicionar</span>
        </Link>
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
            <Link to={`/purchases/${purchase.id}`}>Editar</Link>
          </Purchase>
        ))}
      </Purchases>
      <SeeMoreOpt>
        {isHomePage === true ? (
          <Link to="/purchases">
            <span>Ver mais</span>
          </Link>
        ) : (
          <Link to="/dashboard">
            <span>Voltar para o início</span>
          </Link>
        )}
      </SeeMoreOpt>
    </>
  );
}
