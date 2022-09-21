import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Status from './Components/Status/Status';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Status />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Footer />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
