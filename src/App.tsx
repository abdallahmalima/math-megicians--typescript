import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import HomePage from './pages/HomePage';
import NotFound from './pages/404';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quotes" element={<QuotePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
