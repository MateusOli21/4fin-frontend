import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';

import { updateProfileRequest } from '../../store/modules/user/actions';

import Input from '../../components/Input';
import AvatarInpunt from '../../components/AvatarInput';

import { Container, Teste } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInpunt name="avatar_id" />
        <Teste>
          <Input name="name" type="text" placeholder="Seu nome" />
          <Input name="email" type="email" placeholder="Seu e-mail" />

          <hr />

          <Input name="password" type="password" placeholder="Senha atual" />
          <Input name="newPassword" type="password" placeholder="Nova senha" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirme nova senha"
          />
        </Teste>
        <button type="submit">Confirmar alterações</button>
        <button type="submit">Voltar</button>
      </Form>
    </Container>
  );
}

export default Profile;
