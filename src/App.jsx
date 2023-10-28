import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Documentation from './pages/Documentation';
import Books from './pages/Books';
import Book from './components/Book';
import Navbar from './components/Navbar';
import './App.css'


  const App = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:bookSlug" element={<Book />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }

export default App
