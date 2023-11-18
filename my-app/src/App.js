import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/article' element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
