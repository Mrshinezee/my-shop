import React, { Fragment } from 'react';
import Navbar from './navbar/Navbar'
import './App.css';


function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="r1c0">
          <Navbar/>
        </div>
        <div className="r2c0">b</div>
        <div className="r3c1">c</div>
        <div className="r3c2">d</div>
        <div className="r4c0">e</div>
        <div className="r5c0">f</div>
        <div className="r6c0">g</div>

      </div>
    </Fragment>
  );
}

export default App;
