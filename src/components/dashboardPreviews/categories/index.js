import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import { formatter } from '../../../utils/priceFormatter';

import { HeaderPreview, Categories, Category } from './styles';

export default function CategoriesPreview({ isPurchasePage }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');
      console.log(response.data);

      setCategories(response.data);
    }

    loadCategories();
  }, []);

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
        {categories.map((category) => (
          <Category>
            <h3>{category.name}</h3>
            <h2>{formatter.format(category.max_value)}</h2>
            <Link>
              <span>editar</span>
            </Link>
          </Category>
        ))}
      </Categories>
    </>
  );
}
