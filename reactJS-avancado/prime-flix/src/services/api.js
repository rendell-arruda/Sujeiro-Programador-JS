import axios from 'axios';
// base da url: https://api.themoviedb.org/3/
//url da API: https://api.themoviedb.org/3/movie/now_playing?api_key=62b4fa414cfa191555fad4fcfd39cd69&language=pt-br

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
