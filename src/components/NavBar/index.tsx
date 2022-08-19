import { Link } from 'react-router-dom';
import * as C from './styles';

export const NavBar = () => {

  return (
    <C.Container>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </C.Container>
  )
};