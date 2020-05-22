import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Input from '../../components/Input';

import { Container } from './styles';

export default function UpdateCaregory() {
  async function handleSubmit({ name, max_value }) {
    try {
      await api.post('categories', { name, max_value });
      toast.success('Categoria criada com sucesso');
    } catch (err) {
      toast.error('Erro ao criar categoria.');
    }
  }

  return (
    <Container>
      <h1>Crie uma nova categoria</h1>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome da categoria" />
        <Input
          name="max_value"
          type="text"
          placeholder="Valor máximo de gastos da categoira"
        />
        <button type="submit">Criar categoria</button>

        <Link to="/categories">
          <button>Voltar</button>
        </Link>
      </Form>
    </Container>
  );
}
