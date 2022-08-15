import React from 'react';
import logo from './logo.svg';
import './App.css';
import Desk from "./components/Desk";
import {observer} from "mobx-react";

const App = observer (() => {
  return (
    <div className="App">
      <Desk/>
    </div>
  );
})

export default App;
