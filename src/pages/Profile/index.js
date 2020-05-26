import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';

import { updateProfileRequest } from '../../store/modules/user/actions';

import Input from '../../components/Input';

import { Container } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const {
      name,
      email,
      spend_limit: spendLimit,
      password,
      newPassword,
      confirmPassword,
    } = data;
    const spend_limit = parseInt(spendLimit);

    dispatch(
      updateProfileRequest({
        name,
        email,
        spend_limit,
        password,
        newPassword,
        confirmPassword,
      })
    );
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <label>Seu nome</label>
        <Input name="name" type="text" placeholder="Seu nome" />

        <label>Seu e-mail</label>
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <label>Valor máximo de gastos</label>
        <Input name="spend_limit" placeholder="Limite de gastos" />

        <hr />

        <Input name="password" type="password" placeholder="Senha atual" />
        <Input name="newPassword" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme nova senha"
        />

        <button type="submit">Confirmar alterações</button>
        <button type="submit">Voltar</button>
      </Form>
    </Container>
  );
}

export default Profile;
