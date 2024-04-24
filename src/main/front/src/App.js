import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Content from './pages/Content';

function App() {
  return (
    <BrowserRouter>
      <body>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </body>
    </BrowserRouter>
  );
}

export default App;
