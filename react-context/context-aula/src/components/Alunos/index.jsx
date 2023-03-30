import Nome from '../Nome';
import { UserContext } from '../../contexts/user';
import { useContext } from 'react';

function Alunos() {
  const { alunos, qtdAlunos } = useContext(UserContext);
  return (
    <div>
      <h2>Components Alunos. Nome do Aluno online {qtdAlunos}</h2>
      <Nome />
    </div>
  );
}
export default Alunos;
