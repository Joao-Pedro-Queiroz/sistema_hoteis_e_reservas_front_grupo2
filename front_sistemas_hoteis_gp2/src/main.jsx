import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserReservationsPage from './pages/UserReservationsPage';
import UserList from './components/UserList';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId/reservations" element={<UserReservationsPage />} />
      </Routes>
    </Router>
  );
}