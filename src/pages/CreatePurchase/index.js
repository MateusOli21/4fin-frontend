import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { parseISO } from 'date-fns';

import { createPurchaseRequest } from '../../store/modules/user/actions';

import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container } from './styles';

export default function CreatePurchase() {
  const categories = useSelector((state) => state.user.categories);
  const dispatch = useDispatch();
  const [select, setSelect] = useState([]);

  useEffect(() => {
    const selectOptions = categories.map((category) => {
      return {
        value: category.id,
        label: category.name,
      };
    });

    setSelect(selectOptions);
  }, [categories]);

  function handleSubmit({
    name,
    value: valueFormat,
    date: dateToFormat,
    category_id,
  }) {
    const date = parseISO(dateToFormat);
    const value = parseInt(valueFormat);
    const purchase = { name, value, date, category_id };
    dispatch(createPurchaseRequest(purchase));
  }

  return (
    <Container>
      <h1>Crie uma nova compra</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="value" type="text" placeholder="Valor" />
        <Input name="date" type="date" placeholder="Data" />

        <Select name="category_id" options={select} />
        <button type="submit">Criar compra</button>
        <Link to="/purchases">
          <button>Voltar</button>
        </Link>
      </Form>
    </Container>
  );
}
