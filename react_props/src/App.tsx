import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import User from './user';

function App() {
  return (
    <div className="App">
      
      <Welcome name="Alice" age={19} isActive={true}  />
      <Welcome name="Bob"  age={19} isActive={true} />
      
      <User name="Bryan"  age={29} isAdmin={true} />
      <User name="Bruce"  age={49} isAdmin={false} />
      
    </div>
  );
}

export default App;