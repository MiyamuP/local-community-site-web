import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/article' element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
