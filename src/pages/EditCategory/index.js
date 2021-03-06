import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Form } from '@unform/web';

import {
  updateCategoryRequest,
  deleteCategoryRequest,
} from '../../store/modules/user/actions';

import Input from '../../components/Input';
import { Container, Content } from './styles';

export default function EditCategory() {
  const categories = useSelector((state) => state.user.categories);
  const { id } = useParams();
  const dispatch = useDispatch();

  const categoryInfo = categories.find((category) => {
    return category.id === parseInt(id);
  });

  function handleSubmit(data) {
    const { name, max_value } = data;
    const category = { id, name, max_value };

    dispatch(updateCategoryRequest(category));
  }

  function handleDelete() {
    dispatch(deleteCategoryRequest(id));
  }

  return (
    <Container>
      <h1>Edite sua categoria</h1>
      <Content>
        <Form initialData={categoryInfo} onSubmit={handleSubmit}>
          <label>Nome</label>
          <Input name="name" tyle="text" placeholder="Nome" />

          <label>Valor</label>
          <Input
            name="max_value"
            tyle="text"
            placeholder="Valor máximo de gastos"
          />
          <button type="submit">Atualizar</button>
        </Form>
        <button onClick={handleDelete}>Excluir</button>
        <Link to="/categories">Voltar</Link>
      </Content>
    </Container>
  );
}
