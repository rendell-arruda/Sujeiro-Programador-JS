import React, { useState } from 'react';

function App() {
  //declarar uma nova variável de state, na qual chamaremos de 'contador'

  const [contador, seContador] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p>You clicked {contador} times</p>
      <button onClick={() => seContador(contador + 1)}>Aumentar</button>
    </div>
  );
}

export default App;
