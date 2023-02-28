import { Link } from 'react-router-dom';

function Erro() {
  return (
    <div>
      <h2>Opss parece que essa página não existe!</h2>
      <span>Encontramos estas páginas</span>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Erro;
