import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '62b4fa414cfa191555fad4fcfd39cd69',
            language: 'pt-BR'
          }
        })
        .then(response => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log('filme nao encontrado');
        });
    }
    loadFilme();

    return () => {
      console.log('o componente foi desmontado');
    };
  }, []);

  if (loading) {
    return (
      <div className="filme-info">
        <h3>Carregando detalhes...</h3>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href="#">Trailer</a>
        </button>
      </div>
    </div>
  );
}

export default Filme;