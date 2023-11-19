import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import Event from './pages/Event'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/event/:id' element={<Event />} />
        <Route path='/article' element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
