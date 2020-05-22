import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container } from './styles';

export default function CreatePurchase() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');

      const selectOptions = response.data.map((category) => {
        return {
          value: category.id,
          label: category.name,
        };
      });

      setCategories(selectOptions);
    }
    loadCategories();
  }, []);

  function handleSubmit({ name, value, date: dateToFormat, category_id }) {
    try {
      const date = parseISO(dateToFormat);
      api.post('purchases', { name, value, date, category_id });
      toast.success('Compra criada com sucesso');
    } catch (err) {
      toast.error('Erro ao criar nova compra.');
    }
  }

  return (
    <Container>
      <h1>Crie uma nova compra</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="value" type="text" placeholder="Valor" />
        <Input name="date" type="date" placeholder="Data" />

        <Select name="category_id" options={categories} />
        <button type="submit">Criar compra</button>
        <Link to="/purchases">
          <button>Voltar</button>
        </Link>
      </Form>
    </Container>
  );
}
