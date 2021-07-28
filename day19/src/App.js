import React from 'react';
import IncBut from './UseOfHooks';
import "./App.css";

function App() {
  return (
    <div className="Inc_buttons">
    <h3> Click the button to increment the value</h3>
    <IncBut />
    <IncBut />
    <IncBut />
    <IncBut />
    </div>
  );
};
export default App;
