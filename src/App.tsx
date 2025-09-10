import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import Home from './pages/Home';
import PetOwner from './pages/PetOwner';
import Veterinarian from './pages/Veterinarian';
import Shelter from './pages/Shelter';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';

function Layout() {
  const location = useLocation();
  const { user } = useAppContext();

  const isHome = location.pathname === '/';
  const hasCompletedQuiz = user.name && user.role;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-mint-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ScrollProgressBar />

      {/* ✅ Show Navbar everywhere EXCEPT on Home before quiz */}
      {(!isHome || hasCompletedQuiz) && <Navbar />}

      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet-owner" element={<PetOwner />} />
          <Route path="/veterinarian" element={<Veterinarian />} />
          <Route path="/shelter" element={<Shelter />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout />
      </Router>
    </AppProvider>
  );
}

export default App;
