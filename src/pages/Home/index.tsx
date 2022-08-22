import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import * as C from './styles';

export const Home = () => {

  const auth = useContext(AuthContext);
  
  return (
    <C.Container>
      <C.Title>Seja bem vindo, {auth.user?.name}!</C.Title>
    </C.Container>
  )
};