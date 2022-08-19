// React Router
import { Routes, Route } from 'react-router-dom';

// Pages
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { RequireAuth } from '../contexts/Auth/RequireAuth';

export const RouterPages = () => {

  return (
      <Routes>
        <Route path="/" element={<RequireAuth>< Home /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
};