import { Link } from 'react-router-dom';

function Contato() {
  return (
    <div>
      <h1>Contato Page</h1>
      <span>Contato da empresa (dd) xxxxx-xxxx</span>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Contato;
