import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderPreview, Purchases, Purchase } from './styles';

export default function PurchasesPreview() {
  return (
    <>
      <HeaderPreview>
        <h1>Compras</h1>
        <Link to="/purchases">
          <span>ver mais</span>
        </Link>
      </HeaderPreview>

      <Purchases>
        <Purchase>
          <h3>Starbucks</h3>
          <h2>RS35,00</h2>
          <span>editar</span>
        </Purchase>

        <Purchase>
          <h3>Padaria</h3>
          <h2>RS20,00</h2>
          <span>editar</span>
        </Purchase>

        <Purchase>
          <h3>Netflix</h3>
          <h2>RS30,00</h2>
          <span>editar</span>
        </Purchase>

        <Purchase>
          <h3>Outback</h3>
          <h2>RS100,00</h2>
          <span>editar</span>
        </Purchase>

        <Purchase>
          <h3>Tecnologias</h3>
          <h2>RS150,00</h2>
          <span>editar</span>
        </Purchase>
      </Purchases>
    </>
  );
}
