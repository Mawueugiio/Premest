import React from 'react';
import logo from './logo.svg';
import FirstComponent from './FirstComponnent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import './App.css';

function App() { 
  return (
    <div >
      <p> This is our first custom component</p>
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
    </div>
  );
}

export default App;
