import React, { useState } from 'react';
import { Routes as Routers, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  Footer,
  Navbar,
  Sidebar,
  NotFound,
  TopProgressBar,
} from './components';
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

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className='app'>
      <TopProgressBar />
      <Navbar setToggleSidebar={setToggleSidebar} />
      <ToastContainer />
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
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
