import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/form.css";
import Footer from "./Footer";

function SendMoney() {
    const navigate = useNavigate();
    const [amount, setRecipientAmount]   = useState("");
    const [recipientNo, setRecipientNo]        = useState("");
    const [error, setError]     = useState(false);
    const backBtn = () => {navigate("./../home");}
    const handleSubmit  = (e) => {
        e.preventDefault();
        if(amount.length == 0 || recipientNo.length == 0) {
            setError(true)
        }
        if(amount && recipientNo)
        {
            localStorage.setItem("recipientNo", JSON.stringify(recipientNo));
            localStorage.setItem("recipientAmount", JSON.stringify(parseInt(amount)));
            const bal = localStorage
                .getItem("balance")
                .replace(/"/g, "");
            const newBal = (parseInt(bal) - parseInt(amount));
            localStorage.setItem("balance", JSON.stringify(parseInt(newBal)));
            const date = new Date();
            const sendMoney = {
                MobileNo: recipientNo, 
                MobileAmount: newBal,
                Date: date,
            }
            localStorage.setItem('sendMoney', JSON.stringify(sendMoney));
            console.log("Money successfully sent, your remaining balance is " + (newBal).toFixed(2));
        }
    }
    return (
        <div className="pay-bill">
            <button className="backbtn" onClick={backBtn}>Return</button>
            <div className="auth-form" id="pay-bills">
                <h2 className="title">Send Money</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        name="recipientAmount"
                        type="number"
                        placeholder="Enter The Amount"
                        onChange={(e) => setRecipientAmount(e.target.value)}
                        required
                    />
                    <input
                        className="input"
                        name="recipientNo"
                        type="tel"
                        placeholder="Recipient Mobile No."
                        onChange={(e) => setRecipientNo(e.target.value)}
                        required
                    />
                    <button type="submit">Send Money</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default SendMoney;