import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatter } from '../../../utils/priceFormatter';

import { HeaderPreview, Categories, Category, SeeMoreOpt } from './styles';

export default function CategoriesPreview({ isHomePage }) {
  const categories = useSelector((state) => state.user.categories);
  const purchases = useSelector((state) => state.user.purchases);

  var categoriesTotal = categories.map((category) => {
    const totalValue = purchases
      .map((purchase) => {
        if (purchase.category_id === category.id) {
          return purchase.value;
        }
        return 0;
      })
      .reduce((prev, next) => prev + next);

    return {
      id: category.id,
      name: category.name,
      max_value: category.max_value,
      total_spend: totalValue,
    };
  });

  if (isHomePage) {
    categoriesTotal = categoriesTotal.slice(0, 4);
  }

  return (
    <>
      <HeaderPreview>
        <h1>Categorias</h1>

        <Link to="/create_category">
          <span>Adicionar</span>
        </Link>
      </HeaderPreview>
      <Categories>
        {categoriesTotal.map((category) => (
          <Category key={category.id}>
            <h3>{category.name.toUpperCase()}</h3>
            <h2>{formatter.format(category.max_value)}</h2>
            <p>Total gasto: {formatter.format(category.total_spend)}</p>
            <Link to={`/categories/${category.id}`}>Editar</Link>
          </Category>
        ))}
      </Categories>

      {isHomePage === true ? (
        <SeeMoreOpt>
          <Link to="/categories">
            <span>Ver mais</span>
          </Link>
        </SeeMoreOpt>
      ) : (
        <></>
      )}
    </>
  );
}
