import React from 'react';
import Layout from './sections/Layout';
import Header from './sections/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/main" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
