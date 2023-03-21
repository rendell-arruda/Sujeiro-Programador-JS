import { useState, useEffect } from 'react';
import './app.css';
import { auth, db } from './firebaseConnection';
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, 'posts'), snapshot => {
        let listPost = [];
        snapshot.forEach(doc => {
          listPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          });
        });
        setPosts(listPost);
      });
    }
    loadPosts();
  }, []);

  async function handleAdd() {
    // await setDoc(doc(db, 'posts', '12345'), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    //   .then(() => {
    //     console.log('dados registrados no banco')

    //   })
    //   .catch((error) => {
    //     console.log('Gerrou erro' + error)
    //   })
    //

    await addDoc(collection(db, 'posts'), {
      titulo: titulo,
      autor: autor
    })
      .then(() => {
        console.log('Cadastrado com sucesso');
        setAutor(' ');
        setTitulo(' ');
      })
      .catch(error => {
        console.log('Error' + error);
      });
  }

  async function buscarPost() {
    // const postRef = doc(db, 'posts', 'fiEj5eTKRQOPSgyYMmtl')
    // await getDoc(postRef)
    //   .then((snapshot) => {
    //     setAutor(snapshot.data().autor)
    //     setTitulo(snapshot.data().titulo)
    //   })
    //   .catch(() => {
    //     console.log('erro ao buscar')
    //   })

    // BUSCAR VARIOS POSTS
    const postRef = collection(db, 'posts');
    await getDocs(postRef)
      .then(snapshot => {
        let lista = [];
        snapshot.forEach(doc => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          });
        });
        setPosts(lista);
      })
      .catch(error => {
        console.log('deu erro ao buscar');
      });
  }

  async function editarPost() {
    const docRef = doc(db, 'posts', idPost);
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
      .then(() => {
        console.log('Post atualizado');
        setIdPost(' ');
        setTitulo(' ');
        setAutor(' ');
      })
      .catch(() => {
        'Erro ao atualizar post';
      });
  }

  async function excluirPost(id) {
    const docRef = doc(db, 'posts', id);
    await deleteDoc(docRef)
      .then(() => {
        alert('Post deletado com sucesso');
      })
      .catch(() => {});
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(value => {
        console.log('Cadastrado com sucesso');
        setEmail('');
        setSenha('');
        console.log(value);
      })
      .catch(error => {
        console.log('Error ao cadastrar :' + error);
        if (error.code === 'auth/weak-password') {
          alert('Sua senha deve conter no mínimo 6 digitos');
        } else if (error.code === 'auth/email-already-in-use') {
          alert('Email já cadastrado');
        }
      });
  }

  return (
    <div className="App">
      <h1>ReactJS+firebase :)</h1>
      <div className="container">
        <h2>Usuários</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite um email"
        />
        <br />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={e => {
            setSenha(e.target.value);
          }}
          placeholder="Informe sua senha"
        />

        <br />
        <button onClick={novoUsuario}>Cadastrar</button>
      </div>
      <br />
      <br />
      <hr />

      <div className="container">
        <h2>Posts</h2>
        <label>ID do Post: </label>
        <input
          placeholder="Digite o id do Post"
          value={idPost}
          onChange={e => setIdPost(e.target.value)}
        />
        <br />
        <label>Titulo:</label>
        <textarea
          placeholder="Digite o título"
          type="text"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={e => setAutor(e.target.value)}
        />
        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>
        <br />
        <button onClick={editarPost}>Atualizar Post</button>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br />
                <span>Titulo: {post.titulo}</span>
                <br />
                <span>Autor: {post.autor}</span>
                <br />
                <button onClick={() => excluirPost(post.id)}>Excluir</button>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
