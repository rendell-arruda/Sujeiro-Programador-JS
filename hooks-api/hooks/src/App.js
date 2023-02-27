import React, { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([
    'Aprender React Native',
    'Ler Livro Clean Code',
    'Voltar para os cursos da Alura'
  ]);
  const [input, setInput] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Cadastrar</button>
    </div>
  );
}

export default App;
