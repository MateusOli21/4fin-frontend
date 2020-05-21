import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

function SignUp() {
  return (
    <>
      <Form>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button>Acessar</button>
        <Link to="/">Já possuo conta</Link>
      </Form>
    </>
  );
}

export default SignUp;
