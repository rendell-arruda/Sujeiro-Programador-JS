import React from 'react';
import { UserContext } from '../../contexts/user';
import { useContext } from 'react';

export default function Nome() {
  const { alunos, setAlunos } = useContext(UserContext);
  return (
    <div>
      <span style={{ color: 'yellow' }}>Bem Vindo: {alunos}</span>
      <br />
      <br />
      <button onClick={() => setAlunos('Lucas SILVA')}>Troca nome</button>
    </div>
  );
}
