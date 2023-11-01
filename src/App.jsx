import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Releases from './Components/Releases/Releases';
import Guarantee from './Components/Guarantee/Guarantee';
import Contact from './Components/Contact/Contact';
import History from './Components/History/History';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Releases />
      <Guarantee />
      <Contact />
      <History />
      <Footer />
    </div>
  );
};

export default App;
