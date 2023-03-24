import React from 'react';
import './admin.css';
import { useState } from 'react';
import { auth } from '../../firebaseConnection';
import { signOut } from 'firebase/auth';

export default function Admin() {
  const [tarefaInput, setTarefaInput] = useState('');

  function handleRegister(e) {
    e.preventDefault();
  }

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <div className="admin-container">
      <h1>Minhas tarefas</h1>
      <form className="form" onSubmit={handleRegister}>
        <textarea
          placeholder="Digite sua tarefa"
          value={tarefaInput}
          onChange={e => setTarefaInput(e.target.value)}
        />
        <button type="submit" className="btn-register">
          Registrar tarefa
        </button>
      </form>

      <article className="list">
        <p>Estudar JS e react</p>
        <div>
          <button>Editar</button>
          <button className="btn-delete">Concluir</button>
        </div>
      </article>

      <button className="btn-logout" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}
