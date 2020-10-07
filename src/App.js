import React from 'react';
import './styles/styles.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainContainer from './components/main/MainContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
