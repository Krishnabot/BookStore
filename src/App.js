import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Catagories from './components/Catagories';
import Books from './components/Books';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Catagories />} />
      </Routes>
    </>
  );
}

export default App;
