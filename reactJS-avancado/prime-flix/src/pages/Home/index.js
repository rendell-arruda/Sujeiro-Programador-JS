//https://api.themoviedb.org/3/movie/now_playing?api_key=62b4fa414cfa191555fad4fcfd39cd69&language=pt-br

import { useEffect, useState } from 'react';
import api from '../../services/api';

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '62b4fa414cfa191555fad4fcfd39cd69',
          language: 'pt-BR',
          page: 1
        }
      });
      console.log(response.data.results);
    }

    loadFilmes();
  }, []);
  return (
    <div>
      <h1>Bem vindo a Home</h1>
    </div>
  );
}

export default Home;
