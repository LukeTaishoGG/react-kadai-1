import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PiratesPage from './PiratesPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/pirates" replace />} />
      <Route path="/pirates" element={<PiratesPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;