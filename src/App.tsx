import React from "react";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Logon } from "./pages/feed";
import { Register } from "./pages/register";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Feed" element={<Logon />} />
        <Route path="/Register" element={<Register />} />
      </Routes>

    </Router>
  );
}

export default App;
