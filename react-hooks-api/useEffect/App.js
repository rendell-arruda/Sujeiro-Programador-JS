import React, { useState, useEffect } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput('');
  }
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul key={tarefas}>
        {tarefas.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleAdd}>Cadastar tarefa</button>
    </div>
  );
}

export default App;
