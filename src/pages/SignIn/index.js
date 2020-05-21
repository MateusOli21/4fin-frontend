import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { signInRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    console.log(email, password);

    if (email === '') {
      toast.error('Preencha o campo de e-mail.');
    }

    if (password.length < 6) {
      toast.error('A senha deve conter no mínimo seis dígitos.');
    }

    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Ainda não possuo conta</Link>
      </Form>
    </>
  );
}

export default SignIn;
