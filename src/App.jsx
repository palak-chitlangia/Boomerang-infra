import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/css/framework.css';
import Infra from "./pages/Infra.jsx";
import MetaPixelTracker from './MetaPixelTracker';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MetaPixelTracker />
      <Routes>
        <Route path="/" element={<Infra />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
