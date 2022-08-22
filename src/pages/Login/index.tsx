import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { url } from '../../data/urls';
import { useFetch } from '../../hooks/useFetch';
import { User } from '../../types/User';
import * as C  from './styles';

export const Login = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { data: users } = useFetch(url);

  const [ email, setEmail ] = useState<string>();
  const [ password, setPassword ] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      let isLogged = false;
      users.map((user: User) => {
        if (email === user.email && password) {
          auth.signin(user);
          isLogged = true;
          navigate("/home");
        }
      });
      if (!isLogged) {
        alert("email e/ou senha inválido(s)!");
      }
    }
  };


  return (
    <C.Container>
      <C.Form onSubmit={(e) => handleSubmit(e)}>
        <C.Input
          type="text"
          placeholder="digite seu e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <C.Input
          type="password"
          placeholder="digite sua senha"
          onChange={e => setPassword(e.target.value)}
        />
        <C.Button>Entrar</C.Button>
        <C.Register><Link to="/register">Cadastrar-se</Link></C.Register>
      </C.Form>
    </C.Container>
  )
};