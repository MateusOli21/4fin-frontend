import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

function Dashboard() {
  const profile = useSelector((state) => state.user.profile);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  function handleLogout(data) {
    dispatch(signOut());
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          console.log(profile, token);
        }}
      >
        clicar
      </button>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Dashboard;
