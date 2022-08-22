import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { url } from '../../data/urls';
import { useFetch } from '../../hooks/useFetch';
import { User } from '../../types/User';
import * as C from './styles';

export const Register = () => {

  const [ newUser, setNewUser ] = useState<User>();
  const [ name, setName ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ password1, setPassword1 ] = useState<string>("");
  const [ password2, setPassword2 ] = useState<string>("");

  const { data } = useFetch(url);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!(name && email && password1 && password2)) {
      return alert("todos os campos devem ser preenchidos!");
    }
    if (!(password1 === password2)) {
      return alert("as senhas não condizem!");
    }
    if(data.some((user: User) => user.email == email)) {
      return alert("email já cadastrado!");
    }

    setNewUser({
      name,
      email,
      password: password1
    })
    
    setName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
  };

  useEffect(() => {
    if (newUser) {
      const postData = async () => {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newUser)
        })
        
        const json = await res.json();
        auth.setUser(json);
        alert("cadastro realizado com sucesso!");
        navigate("/home");
      };
      postData();
    }
  }, [newUser]);

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <C.Input
          type="text"
          placeholder="nome de usuário"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <C.Input 
          type="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <C.Input 
          type="password"
          placeholder="definir senha"
          onChange={e => setPassword1(e.target.value)}
          value={password1}
        />
        <C.Input 
          type="password"
          placeholder="confirmar senha"
          onChange={e => setPassword2(e.target.value)}
          value={password2}
        />
        <C.Button>Cadastrar-se</C.Button>
        <C.Login><Link to="/">Fazer login</Link></C.Login>
      </C.Form>
    </C.Container>
  )
};