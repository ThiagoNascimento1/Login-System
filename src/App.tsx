import { NavBar } from "./components/NavBar";
import { RouterPages } from "./Routers/Routes";
import * as C from './styles/styles';

export const App = () => {

  return (
    <C.Container>
      <NavBar />
      <RouterPages />
    </C.Container>
  )
};