import React from 'react';
import { useState } from 'react'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import PageLayout from './components/PageLayout';
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './subpages/MainPage'
import PageContent from './components/PageContent';
import NotFound from './subpages/NotFound';
import Psychiatrist from './subpages/med/Psychiatrist';
import Endocrynologist from './subpages/med/Endocrinologist';

function App() {
  const [count, setCount] = useState(0);

  return (
    <PageLayout>
      <Router baseUrl={process.env.VITE_BASE_URL}>
        <Header/>
        <PageContent>
          <Routes>
            <Route index exact path="/" element={<MainPage />}/>

            <Route exact path="/psychiatrist" element={<Psychiatrist />}/>
            <Route exact path="/endocrynologist" element={<Endocrynologist />}/>

            <Route exact path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate replace to="/404" />} />
          </Routes>
        </PageContent>
        <Footer/>
      </Router>
    </PageLayout>
  )
};

export default App;
