import React, { useState } from 'react';
import Home from './pages/Home';
import Hustles from './pages/Hustles';
import Guides from './pages/Guides';
import Contact from './pages/Contact';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      {/* Navigation */}
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#222' }}>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('hustles')}>Hustles</button>
        <button onClick={() => setPage('guides')}>Guides</button>
        <button onClick={() => setPage('contact')}>Contact</button>
      </nav>

      {/* Page Content */}
      <main style={{ padding: '1rem' }}>
        {page === 'home' && <Home />}
        {page === 'hustles' && <Hustles />}
        {page === 'guides' && <Guides />}
        {page === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
