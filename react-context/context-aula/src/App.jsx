import { useState } from 'react';
import './App.css';
import Alunos from './components/Alunos';
import UserProvider from './contexts/user';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Escola</h1>
        <hr />
        <Alunos />
      </div>
    </UserProvider>
  );
}

export default App;
