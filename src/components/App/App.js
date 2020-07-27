import React from 'react';
import './App.css';
import Header from '../Header';
// import ContentBlock from '../ContentBlock';
import RightBlock from '../RightBlock';
import LeftBlock from '../LeftBlock';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-body">
        <LeftBlock />
        <RightBlock />
      </div>
      
    </div>
  );
}

export default App;
