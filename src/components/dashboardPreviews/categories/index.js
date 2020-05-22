import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderPreview, Categories, Category } from './styles';

export default function CategoriesPreview({ isPurchasePage }) {
  return (
    <>
      <HeaderPreview>
        <h1>Categorias</h1>
        {isPurchasePage === false ? (
          <></>
        ) : (
          <Link to="/categories">
            <span>ver mais</span>
          </Link>
        )}
      </HeaderPreview>
      <Categories>
        <Category>
          <h3>Comidas</h3>
          <h2>RS200,00</h2>
          <span>editar</span>
        </Category>

        <Category>
          <h3>Tecnologias</h3>
          <h2>RS150,00</h2>
          <span>editar</span>
        </Category>

        <Category>
          <h3>Tecnologias</h3>
          <h2>RS150,00</h2>
          <span>editar</span>
        </Category>
      </Categories>
    </>
  );
}
