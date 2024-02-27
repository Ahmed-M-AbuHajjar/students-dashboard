import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import RequireAuth from './auth/RequireAuth';
import './App.css';
import { RootState } from './redux/rootReducer';

function App() {
   // Check if the user is logged in
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
   // Wrap the Dashboard component with RequireAuth HOC
  const Auth = RequireAuth(Dashboard);
  // Define a Home component with Sidebar, Navbar, and Auth components
  const Home = () => (
    <>
      <Sidebar />
      <Container stickyNav={<Navbar />} content={<Auth />} />
    </>
  );

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {!loggedIn ? (
            <Route path='/' element={<Login />} />
          ) : (
            <Route path='/*' element={<Home />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;