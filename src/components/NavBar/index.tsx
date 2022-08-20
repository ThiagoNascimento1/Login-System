import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import * as C from './styles';

export const NavBar = () => {

  const auth = useContext(AuthContext);

  return (
    <C.Container>
      {!auth.user && <Link to='/login'>Login</Link>}
      <Link to='/'>Home</Link>
      {auth.user && <Link to='/login' onClick={auth.signout}>Sair</Link>}
    </C.Container>
  )
};