import React from 'react';
import './App.css';
import Card from './components/cards';

function App(props) {
  return (
      <div className="parent">
        <h1>Calorie Read only</h1>
        <div className="App">
          <Card title="100 calories" h1="eggs" />
          <Card title="120 calories" h1="Milk"/>
          <Card title="130 calories" h1="peanut"/>
          <Card title="140 calories" h1="chappati"/>
          <Card title="150 calories" h1="rice"/>
          <Card title="160 calories" h1="potatoes"/>
        </div>
      </div>
  );
};

export default App;
