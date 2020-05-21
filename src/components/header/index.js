import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';
import { Container, Menu, MenuOption } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Link to="/dashboard">
        <img src={logo} alt="4fin" />
      </Link>

      <Menu>
        <ul>
          <li>
            <MenuOption to="/dashboard">Home</MenuOption>
          </li>
          <li>
            <MenuOption to="/categories">Categorias</MenuOption>
          </li>
          <li>
            <MenuOption to="/purchases">Compras</MenuOption>
          </li>
          <li>
            <MenuOption to="/profile">Perfil</MenuOption>
          </li>
          <li>
            <button onClick={handleLogout}>Sair</button>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
