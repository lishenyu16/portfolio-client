import React from 'react';
import { Routes, Route, useParams, Link, Outlet } from 'react-router-dom';
//import Home from './pages/Home';
import Home from './pages/home/Index';
import Articles from './pages/articles/Articles';
import About from './pages/about/About';
import NotFound from './pages/NotFound';
import Layouts from './views/layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;