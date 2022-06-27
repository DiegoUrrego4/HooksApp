import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { Homepage } from './Homepage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='/*' element={<Navigate to={'/about'} />} />
      </Routes>
    </UserProvider>
  );
};
