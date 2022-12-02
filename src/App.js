import React, { useState } from 'react';
import { Routes as Routers, Route } from 'react-router-dom';
import {
  Footer,
  Navbar,
  Sidebar,
  NotFound,
  TopProgressBar,
} from './components';
import { About, Home } from './pages';

import './styles/App.scss';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className='app'>
      <TopProgressBar />
      <Navbar setToggleSidebar={setToggleSidebar} />
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />

      <main>
        <Routers>
          <Route path='/about-us' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routers>
      </main>
      <Footer />
    </div>
  );
}

export default App;
