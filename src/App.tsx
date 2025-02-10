import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Documentation } from './pages/Documentation';
import { Terminal } from './pages/Terminal';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black text-white">
              <Header />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <div className="min-h-screen bg-black text-white">
              <Header />
              <HowItWorks />
              <Footer />
            </div>
          }
        />
        <Route
          path="/docs"
          element={
            <div className="min-h-screen bg-black text-white">
              <Documentation />
              <Footer />
            </div>
          }
        />
        {/* Terminal route without header and footer */}
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </Router>
  );
}

export default App