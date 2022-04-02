import './Layout.css';
import React from 'react';
import History from './History/History';
import Search from './Search/Search';
import Statistics from './Statistics/Statistics';

function Layout() {
  return (
    <main>
      <Search />
      <History />
      <Statistics />
    </main>
  );
}

export default Layout;