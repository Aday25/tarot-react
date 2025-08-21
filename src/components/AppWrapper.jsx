import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

export default function AppWrapper({ children }) {
  return (
    <Router>
      <ScrollToTop />
      {children}
    </Router>
  );
}