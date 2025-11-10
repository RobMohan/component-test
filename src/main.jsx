import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocsLayout from './layout/DocsLayout';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import StatCardPage from './pages/StatCardPage';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DocsLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/stat-card" element={<StatCardPage />} />
        </Routes>
      </DocsLayout>
    </BrowserRouter>
  </React.StrictMode>
);