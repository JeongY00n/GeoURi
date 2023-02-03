import React, { useState } from "react";
import "./App.css";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import Socket from "./Components/Util/Socket";
import Home from "./Pages/Home";
import { Routes, Route } from 'react-router-dom'; 
import Kids from "./Pages/Kids";
import GeneralView from "./Pages/GeneralView";

function App() {
  const webSocket = new WebSocket("ws://localhost:9998");
  const [msg, setMsg] = useState(null);
  return (
    <React.Fragment>
      <Socket webSocket={webSocket} setMsg={setMsg}>
      </Socket>
        <HomeHeader />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/kids" element={<Kids webSocket={webSocket} msg={msg} />}/>
          <Route path="/general" element={<GeneralView webSocket={webSocket} />}/>
        </Routes>
    </React.Fragment>
  );
}

export default App;