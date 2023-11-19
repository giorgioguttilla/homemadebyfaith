import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import Footer from './common/Footer';
import Header from './common/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{margin: 0, padding: 0, width: '100%'}}>
      {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/search/:search" element={<SearchResults />} />
        <Route path="/digest/:id" element={<Digest />} />
        <Route path="/:section/:id" element={<Event />} />
        <Route path="/:id" element={<Home />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
