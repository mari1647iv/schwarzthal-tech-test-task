import React from 'react';
import Layout from './sections/Layout';
import Header from './sections/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/main" element={<Layout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
