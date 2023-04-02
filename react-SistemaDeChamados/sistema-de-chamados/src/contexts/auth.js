import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function signIn(email, password) {
    console.log(email);
    console.log(password);
    alert('logado com sucesso');
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
