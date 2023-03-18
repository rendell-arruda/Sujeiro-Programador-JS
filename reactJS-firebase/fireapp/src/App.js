import { useState } from 'react';
import './app.css';
import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs } from 'firebase/firestore'

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);


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
        console.log('Cadastrado com sucesso')
        setAutor(' ')
        setTitulo(' ')
      })
      .catch((error) => {
        console.log("Error" + error)
      })

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
    const postRef = collection(db, 'posts')
    await getDocs(postRef)
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
        setPosts(lista);

      })
      .catch((error) => {
        console.log('deu erro ao buscar')
      })
  }

  return (
    <div className="App">
      <h1>ReactJS+firebase :)</h1>
      <div className="container">
        <label>Titulo:</label>
        <textarea
          placeholder="Digite o título"
          type="text"
          value={titulo} onChange={(e) => setTitulo(e.target.value)} />


        <label>Autor:</label>
        <input type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)} />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <span>Titulo: {post.titulo}</span><br />
                <span>Autor: {post.autor}</span><br />
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
