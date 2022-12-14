import { Alert } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/form.css";

function ForgotPass() {
  const [email, setEmail] = useState(" ");
  const [pswd, setPswd] = useState(" ");
  const [cPswd, setCPswd] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const emailAd = localStorage
      .getItem("email")
      .replace(/"/g, "");
    if(email === emailAd) {
      if(cPswd === pswd) {
        if(!email || !pswd ) {
          setFlag(true)
        } else {
          setFlag(false);
          localStorage.setItem("password", JSON.stringify(pswd));
          console.log("Saved in Local Storage");
          setLogin(!login);
          <Alert severity="sucess">Email update successful!</Alert>
          navigate("/login");
        }
      } else {
        <Alert severity="warning">Your password and confirmation password must match.</Alert>
      }
    } else {
      <Alert severity="warning">Incorrect email. Please try again.</Alert>
    }
  }

  function handleChange() {
    setLogin(!login);
  }

  return (
    <div className="auth-form" id="forgot-pass">
      <h2 className="title">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPswd(e.target.value)}
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          minLength="8"
          required
        />
        <input
          onChange={(e) => setCPswd(e.target.value)}
          className="input"
          type="password"
          name="confirmPass"
          placeholder="Confirm Password"
          minLength="8"
        />
        {!flag ? (
        <button type="submit">Reset Password</button>
      ) : (
        <Link to="/login"><button disabled>Resetting Password...</button></Link>
      )}
      </form>
      <p><Link to="./../login">Cancel</Link></p>
    </div>
  );
}

export default ForgotPass