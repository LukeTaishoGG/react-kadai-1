import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PiratesPage from './PiratesPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PiratesPage />} />
    </Routes>
  </BrowserRouter>
);
export default AppRoutes;