import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageContact from './Components/Pages/PageContact/PageContact.jsx';
import PageStores from './Components/Pages/PageStores/PageStores.jsx';
import PageGlasses from './Components/Pages/PageGlasses/PageGlasses.jsx';
import Fois from './Components/PagesGlasses/Fois/Fois.jsx';
import Calvin from './Components/PagesGlasses/Calvin/Calvin.jsx';
import Oakley from './Components/PagesGlasses/Oakley/Oakley.jsx';
import Buy from './Components/PagesGlasses/Buy/Buy.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='Buy' element={<Buy />} />
        <Route path="Fois" element={<Fois />} />
        <Route path="Calvin" element={<Calvin />} />
        <Route path="Oakley" element={<Oakley />} />
        <Route path="Contact" element={<PageContact />} />
        <Route path="Stores" element={<PageStores />} />
        <Route path="Glasses" element={<PageGlasses />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
