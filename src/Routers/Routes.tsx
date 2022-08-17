// React Router
import { Routes, Route } from 'react-router-dom';

// Pages
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

export const RouterPages = () => {

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={< Home />} />
      </Routes>
  )
};