import React, { useState, useEffect } from 'react';
import { Routes as Routers, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Footer, NotFound, TopProgressBar } from './components';
import { Navbar, Sidebar, UserMobileMenu } from './components/navigation';
import {
  About,
  Home,
  Services,
  Recruitments,
  Contact,
  GeUsa,
  GeNigeria,
  Signup,
  Login,
} from './pages';

import './styles/App.scss';
import auth from './services/authService';

function App() {
  const [user, setUser] = useState(null);

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  useEffect(() => {
    const data = auth.getCurrentUser();
    setUser(data);
  }, []);

  return (
    <div className='app'>
      <TopProgressBar />
      <Navbar setToggleSidebar={setToggleSidebar} user={user} />
      <ToastContainer />
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        setToggleMobileMenu={setToggleMobileMenu}
        user={user}
      />
      <UserMobileMenu
        toggleMobileMenu={toggleMobileMenu}
        setToggleMobileMenu={setToggleMobileMenu}
        user={user}
      />

      <main>
        <Routers>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/guardenforcement-usa' element={<GeUsa />} />
          <Route path='/guardenforcement-nigeria' element={<GeNigeria />} />
          <Route path='/services' element={<Services />} />
          <Route path='/recruitments' element={<Recruitments />} />
          <Route path='/our-company' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routers>
      </main>
      <Footer />
    </div>
  );
}

export default App;
