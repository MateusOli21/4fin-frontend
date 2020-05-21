import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const profile = useSelector((state) => state.user.profile);
  const token = useSelector((state) => state.auth.token);

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
    </div>
  );
}

export default Dashboard;
