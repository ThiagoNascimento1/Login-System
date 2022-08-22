// React Router
import { Routes, Route } from 'react-router-dom';

// Pages
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import { Register } from '../pages/Register';

export const RouterPages = () => {

  return (
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<RequireAuth>< Home /></RequireAuth>} />
        <Route path="/register" element={<Register />} />
      </Routes>
  )
};