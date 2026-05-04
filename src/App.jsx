import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Intercom from '@intercom/messenger-js-sdk';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/css/framework.css';
import Infra from "./pages/Infra.jsx";
import MetaPixelTracker from './MetaPixelTracker';
import ScrollToTop from './ScrollToTop';

const INTERCOM_APP_ID = 'cb2s4xg1';

const App = () => {
  useEffect(() => {
    Intercom({
      app_id: INTERCOM_APP_ID,
    });
  }, []);
  
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
