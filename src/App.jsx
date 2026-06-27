import './index.css'
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from './assets/views/Home';
import Posts from './assets/views/Posts';
import Navbar from './assets/components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
