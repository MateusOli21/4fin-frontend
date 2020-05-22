import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCategoriesRequest } from '../../../store/modules/categories/actions';
import { formatter } from '../../../utils/priceFormatter';

import { HeaderPreview, Categories, Category, SeeMoreOpt } from './styles';

export default function CategoriesPreview({ isCategoriesPage }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    async function loadCategories() {
      dispatch(getCategoriesRequest());
    }

    loadCategories();
  }, [dispatch]);

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
            <Link to={`/category/${category.id}`}>
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
