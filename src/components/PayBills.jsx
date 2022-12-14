import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/form.css";
import Footer from "./Footer";

function PayBills() {
    const navigate = useNavigate();
    const [amount, setAmount]               = useState("");
    const [accountnumber, setAccountNo]     = useState("");
    const [accountname, setAccountName]     = useState("");
    const [error, setError]                 = useState(false);
    const backBtn = () => {navigate("./../home");}
    const handleSubmit  = (e) => {
        e.preventDefault();
        if(amount.length == 0 || accountnumber.length == 0 || accountname.length == 0) {
            setError(true)
        }
        if(amount && accountnumber && accountname)
        {
            localStorage.setItem("accountName", JSON.stringify(accountname));
            localStorage.setItem("accountNo.", JSON.stringify(accountnumber));
            localStorage.setItem("accountBalance", JSON.stringify(parseInt(amount)));
            const bal = localStorage
                .getItem("balance")
                .replace(/"/g, "");
            const newBal = (parseInt(bal) - parseInt(amount));
            localStorage.setItem("balance", JSON.stringify(parseInt(newBal)));
            const date = new Date();
            const payBills = {
                AccountName: accountname,
                AccountNo: accountnumber, 
                Amount: newBal,
                Date: date,
            }
            localStorage.setItem('payBills', JSON.stringify(payBills));
            console.log("Pay bills successful, your remaining balance is " + (newBal).toFixed(2));
        }
    }
    return (
        <div className="pay-bill">
            <button className="backbtn" onClick={backBtn}>Return</button>
            <div className="auth-form" id="pay-bills">
                <h2 className="title">Pay Bills</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        name="amount"
                        type="number"
                        placeholder="Enter The Amount"
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <input
                        className="input"
                        name="accountNo"
                        type="text"
                        placeholder="Account Number"
                        onChange={(e) => setAccountNo(e.target.value)}
                        required
                    />
                    <input
                        className="input"
                        name="accountName"
                        type="text"
                        placeholder="Account Name"
                        onChange={(e) => setAccountName(e.target.value)}
                        required
                    />
                    <button type="submit">Pay Bill</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default PayBills;