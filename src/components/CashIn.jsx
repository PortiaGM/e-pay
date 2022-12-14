import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/cashin.css";
import Footer from "./Footer";
const CashIn = () => {
  const navigate    = useNavigate();
  const [result, setResult] = useState("");
  const handleClick = (e) => { setResult(result.concat(e.target.name)); }
  const handleClear = ()  => { setResult(""); }
  const backspace   = ()  => { setResult(result.slice(0, result.length -1)); }
  const backBtn     = ()  => {navigate("./../home");}
  const handleSubmit = () => {
    const bal = localStorage
    .getItem("balance")
    .replace(/"/g, "");
    const newBal = (parseInt(bal) + parseInt(result));
    localStorage.setItem("balance", JSON.stringify(parseInt(newBal)));
    const date = new Date();
    const cashIn = {
      Amount: newBal,
      Date: date,
    }
    localStorage.setItem('cashIn', JSON.stringify(cashIn));
    console.log("Cash in successful, your new balance is " + newBal);
  }
  return (
    <div className="cash-in">
      <div className="wrapper">
      <button className="backbtn" onClick={backBtn}>Return</button>
        <div className="keypad">
          <div className="input">
            <input
              type="text"
              value={result} 
              placeholder="Enter Amount"
            />
            <button 
              className="btn special red"
              onClick={backspace}
              id="backspace"
            >CANCEL</button>
            <button
              className="btn special yellow"
              onClick={handleClear}
              id="clear"
            >CLEAR</button>
            <button
              className="btn special green"
              onClick={handleSubmit}
            >ENTER</button>
            <button name="1" className="btn" onClick={handleClick}>1</button>
            <button name="2" className="btn" onClick={handleClick}>2</button>
            <button name="3" className="btn" onClick={handleClick}>3</button>
            <button name="4" className="btn" onClick={handleClick}>4</button>
            <button name="5" className="btn" onClick={handleClick}>5</button>
            <button name="6" className="btn" onClick={handleClick}>6</button>
            <button name="7" className="btn" onClick={handleClick}>7</button>
            <button name="8" className="btn" onClick={handleClick}>8</button>
            <button name="9" className="btn" onClick={handleClick}>9</button>
            <button name="0" className="btn" onClick={handleClick}>0</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default CashIn;