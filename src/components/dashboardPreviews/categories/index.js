import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatter } from '../../../utils/priceFormatter';

import { HeaderPreview, Categories, Category, SeeMoreOpt } from './styles';

export default function CategoriesPreview({ isCategoriesPage }) {
  const categories = useSelector((state) => state.user.categories);

  return (
    <>
      <HeaderPreview>
        <h1>Categorias</h1>

        <Link to="/create_category">
          <span>Adicionar</span>
        </Link>
      </HeaderPreview>
      <Categories>
        {categories.map((category) => (
          <Category key={category.id}>
            <h3>{category.name.toUpperCase()}</h3>
            <h2>{formatter.format(category.max_value)}</h2>
            <Link to={`/categories/${category.id}`}>
              <span>editar</span>
            </Link>
          </Category>
        ))}
      </Categories>

      {isCategoriesPage === false ? (
        <></>
      ) : (
        <SeeMoreOpt>
          <Link to="/categories">
            <span>Ver mais</span>
          </Link>
        </SeeMoreOpt>
      )}
    </>
  );
}
