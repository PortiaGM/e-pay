import React from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPass from "./components/ForgotPass";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./styles/root.css";
import CashIn from "./components/CashIn";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-pass" element={<ForgotPass />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cash" element={<CashIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
