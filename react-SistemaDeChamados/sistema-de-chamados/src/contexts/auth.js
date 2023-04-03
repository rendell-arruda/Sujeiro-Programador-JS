import { useState, createContext, useEffect } from 'react';
import { auth, db } from '../services/firebaseConnections';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

//criacao do context
export const AuthContext = createContext({});

//criar provedor de contexto
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  function signIn(email, password) {
    console.log(email);
    console.log(password);
    alert('logado com sucesso');
  }

  // cadastrar um novo user
  async function signUp(email, password, name) {
    setLoadingAuth(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async value => {
        let uid = value.user.uid;

        await setDoc(doc(db, 'users', uid), {
          nome: name,
          avatarUrl: null
        }).then(() => {
          let data = {
            uid: uid,
            nome: name,
            email: value.user.email,
            avatarUrl: null
          };
          setUser(data);
          setLoadingAuth(false);
        });
      })

      .catch(error => {
        console.log(error);
        setLoadingAuth(false);
      });
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user, //verifica se esta logado: !!user=false
        user,
        signIn,
        signUp,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
