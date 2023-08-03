import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Index';
import Articles from './pages/articles/Articles';
import About from './pages/about/About';
import Timeline from './pages/timeline/timeline';
import NotFound from './pages/NotFound';
import Layouts from './views/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;