import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import * as C from './styles';

export const NavBar = () => {

  const auth = useContext(AuthContext);

  return (
    <C.Container>
      {!auth.user && <Link to='/'>Login</Link>}
      {!auth.user && <Link to='/register'>Cadastrar-se</Link>}
      <Link to='/home'>Home</Link>
      {auth.user && <Link to='/' onClick={auth.signout}>Sair</Link>}
    </C.Container>
  )
};