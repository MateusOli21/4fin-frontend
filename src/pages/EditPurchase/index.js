import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Content } from './styles';

export default function EditPurchase() {
  const purchases = useSelector((state) => state.user.purchases);
  const categories = useSelector((state) => state.user.categories);

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

  const { id } = useParams();
  const purchase = purchases.find((purchase) => {
    return purchase.id === parseInt(id);
  });

  function handleSubmit(data) {
    const { name, value, date: dateToFormat, category_id } = data;
    const date = parseISO(dateToFormat);
    const purchase = { id, name, value, date, category_id };
    console.log(purchase);
  }

  return (
    <Container>
      <h1>Edite sua compra</h1>
      <Content>
        <Form initialData={purchase} onSubmit={handleSubmit}>
          <Input name="name" tyle="text" placeholder="Nome" />
          <Input name="value" tyle="text" placeholder="Valor " />
          <Input name="date" type="date" placeholder="Data" />
          <Select name="category_id" options={select} />

          <button type="submit">Atualizar</button>
        </Form>
        <button>Excluir</button>
      </Content>
    </Container>
  );
}
