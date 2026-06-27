import './index.css'
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from './assets/views/Home';
import Posts from './assets/views/Posts';
import Navbar from './assets/components/Navbar';
import Detail from './assets/views/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
