import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Footer from "./Footer";
import { Avatar } from "@mui/material";
import "./../styles/home.css";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Home = () => {
  const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem("authenticated")));
  const fname = localStorage
    .getItem("firstName")
    .replace(/"/g, "");
  const lname = localStorage
    .getItem("lastName")
    .replace(/"/g, "");
  const balance = localStorage
    .getItem("balance")
    .replace(/"/g, "")
  const bal = parseInt(balance).toFixed(2)
  const name = [fname, lname].join(' ');
  const navigate = useNavigate();
  const handleBill = (e) => {
    e.preventDefault();
    navigate("/bill");
  };
  const handleCash = (e) => {
    e.preventDefault();
    navigate("/cash");
  };
  const handleSend = (e) => {
    e.preventDefault();
    navigate("/send");
  };
  const handleOut = (e) => {
    e.preventDefault();
    localStorage.setItem("authenticated", false);
    navigate("/login");
  };
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="home">
          <div className="main-container">
            <div className="container1 userInfo1">
              <Avatar className="avatar1" alt={name} src="/static/images/avatar/1.jpg"/>
              <h2 className="avatarName1">{name}</h2>
              <button className="logOut" onClick={handleOut}>Log Out</button>
            </div>
            <div className="container1 userBal">
              <h2 className="balStr">Available Balance</h2>
              <p className="balInt">₱ {bal}</p>
            </div>
            <div className="row icons">
              <div className="column" onClick={handleBill}>
                <Avatar><RequestQuoteIcon className="icon" sx={{ fontSize: "25px" }} /></Avatar>
                <p className="iconTxt">Bill</p>
              </div>
              <div className="column" onClick={handleCash}>
                <Avatar><LocalAtmIcon className="icon" sx={{ fontSize: "25px" }} /></Avatar>
                <p className="iconTxt">Cash In</p>
              </div>
              <div className="column" onClick={handleSend}>
              <Avatar><CurrencyExchangeIcon className="icon" sx={{ fontSize: "25px" }} /></Avatar>
                <p className="iconTxt">Send</p>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
};

export default Home;
