// import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ReactGA from 'react-ga4';

import Home from './pages/Home';
import About from './pages/About';
import Directiva from './pages/Directiva';
import Socios from 'pages/Socios';

const App = () => {
  ReactGA.initialize('G-48FLMET5FP');
  return (
    <Router>
      <div className="App">
        <ParallaxProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/club" element={<About />} />
            <Route path="/directiva" element={<Directiva />} />
            <Route path="/socios" element={<Socios />} />
          </Routes>
        </ParallaxProvider>
      </div>
    </Router>
  );
}

export default App;
