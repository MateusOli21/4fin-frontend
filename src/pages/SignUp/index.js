import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { SignUpRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';

function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    if (name === '') {
      toast.error('Preencha com seu nome completo.');
    }

    if (email === '') {
      toast.error('Preencha um e-mail válido');
    }

    if (password.length < 6) {
      toast.error('A senha deve conter pelo menos seis caracteres.');
    }

    dispatch(SignUpRequest(name, email, password));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo conta</Link>
      </Form>
    </>
  );
}

export default SignUp;
