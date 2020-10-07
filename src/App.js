import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainContainer from './components/main/MainContainer';

function App() {
  return (
    <div className="App h-screen">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
