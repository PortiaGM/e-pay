import { useEffect, useState } from "react";
import Footer from "./Footer";
import "./../styles/profile.css";

const Transactions = () => {
  const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem("authenticated")));
  const cashIn = localStorage
    .getItem("cashIn")
    .replace(/"/g, "");
  const payBills = localStorage
    .getItem("payBills")
    .replace(/"/g, "");
  const sendMoney = localStorage
    .getItem("sendMoney")
    .replace(/"/g, "");
  const cashInTrans = cashIn.replace(/[{}]/g, "");
  const payBillsTrans = payBills.replace(/[{}]/g, "");
  const sendMoneyTrans = sendMoney.replace(/[{}]/g, "");

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
      <div className="transactions">
          <div className="main-container">
            <div className="container userInfo">
              <h1 className="title">Transactions</h1>
              <h2 className="head">{payBillsTrans}</h2>
              <p className="sub">Pay Bills Transaction</p>
              <h2 className="head">{cashInTrans}</h2>
              <p className="sub">Cash In Transaction</p>
              <h2 className="head">{sendMoneyTrans}</h2>
              <p className="sub">Send Money Transaction</p>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
};

export default Transactions;
