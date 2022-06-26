import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './routes/Home/Home';
import Grid1 from './routes/Grid1/Grid1';
import Grid2 from './routes/Grid2/Grid2';
import Grid3 from './routes/Grid3/Grid3';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid1" element={<Grid1 />} />
        <Route path="/grid2" element={<Grid2 />} />
        <Route path="/grid3" element={<Grid3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
