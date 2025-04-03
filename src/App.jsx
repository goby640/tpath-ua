import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import PageLayout from './components/PageLayout';
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './subpages/MainPage'
import PageContent from './components/PageContent';
import NotFound from './subpages/NotFound';

function App() {
  const [count, setCount] = useState(0);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <PageLayout>
      <Router baseUrl={baseUrl}>
        <Header/>
        <PageContent>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </PageContent>
        <Footer/>
      </Router>
    </PageLayout>
  )
};

export default App;
