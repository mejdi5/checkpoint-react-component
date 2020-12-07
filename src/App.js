import React from 'react';
import './App.css';
import ProfilPhoto from "./Profile/ProfilPhoto";
import FullName from "./Profile/FullName";
import Adress from "./Profile/Adress";

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
