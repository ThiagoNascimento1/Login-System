import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import * as C  from './styles';

export const Login = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [ email, setEmail ] = useState<string>();
  const [ password, setPassword ] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      const isLogged = auth.signin(email, password);

      if (isLogged) {
        navigate("/");
      } else {
        alert("usuário e/ou senha inválido(s)");
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
      </C.Form>
    </C.Container>
  )
};