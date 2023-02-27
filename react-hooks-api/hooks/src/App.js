import React, { useState, useEffect, useMemo, useCallback } from 'react';

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

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul key={tarefas}>
        {tarefas.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ul>

      <br />
      <strong>Você tem {totalTarefas} tarefas!</strong>
      <br />

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
