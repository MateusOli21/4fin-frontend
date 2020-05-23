import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Select from '../../components/Select';

import {
  updatePurchaseRequest,
  deletePurchaseRequest,
} from '../../store/modules/user/actions';

import { Container, Content } from './styles';

export default function EditPurchase() {
  const purchases = useSelector((state) => state.user.purchases);
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

  const { id: idParams } = useParams();
  const purchase = purchases.find((purchase) => {
    return purchase.id === parseInt(idParams);
  });

  function handleSubmit(data) {
    const {
      name,
      value: valueToFormat,
      date: dateToFormat,
      category_id,
    } = data;

    const date = parseISO(dateToFormat);
    const value = parseInt(valueToFormat);
    const id = parseInt(idParams);
    const purchase = { id, name, value, date, category_id };

    dispatch(updatePurchaseRequest(purchase));
  }

  function handleDelete() {
    dispatch(deletePurchaseRequest(idParams));
  }

  return (
    <Container>
      <h1>Edite sua compra</h1>
      <Content>
        <Form initialData={purchase} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nome" />
          <Input name="value" placeholder="Valor " />
          <Input name="date" type="date" placeholder="Data" />
          <Select name="category_id" options={select} />

          <button type="submit">Atualizar</button>
        </Form>
        <button onClick={handleDelete}>Excluir</button>
      </Content>
    </Container>
  );
}
