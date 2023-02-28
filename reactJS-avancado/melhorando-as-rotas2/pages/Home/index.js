import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo ao home</h1>
      <br />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contato">Contato</Link>
      <hr />
      <Link to="/produto/123">Acessar produto 123</Link>
      <br />
      <Link to="/produto/425">Acessar produto 425</Link>
    </div>
  );
}

export default Home;
