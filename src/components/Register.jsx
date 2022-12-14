import { Alert } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/form.css";

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [bday, setBday]   = useState("");
  const [mob, setMob]     = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd]   = useState("");
  const [cPswd, setCPswd] = useState("");
  const [flag, setFlag]   = useState(false);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

function handleSubmit(e) {
  e.preventDefault();
  if(cPswd === pswd) {
    if(!fname || !lname || !bday || !mob || !email || !pswd ) {
      setFlag(true)
    } else {
      setFlag(false);
      localStorage.setItem("firstName", JSON.stringify(fname));
      localStorage.setItem("lastName", JSON.stringify(lname));
      localStorage.setItem("birthday", JSON.stringify(bday));
      localStorage.setItem("mobile", JSON.stringify(mob));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(pswd));
      localStorage.setItem("balance", JSON.stringify("0"));
      console.log("Saved in Local Storage");
      setLogin(!login);
      <Alert severity="sucess">Your account creation is successful.</Alert>
      navigate("/login");
    }
  } else {
    <Alert severity="warning">Your password and confirmation password must match.</Alert>
  }
}

function handleChange() {
  setLogin(!login);
}

  return (
  <div className="auth-form" id="register">
    <h2 className="title">Register</h2>
    <p>Please fill this form to create an account</p>
    <form id="register-form" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setFname(e.target.value)}
        className="input"
        type="text"
        name="fname"
        id="first-name"
        placeholder="First Name"
        required
      />
      <input
        onChange={(e) => setLname(e.target.value)}
        className="input"
        type="text"
        name="lname"
        id="last-name"
        placeholder="Last Name"
        required
      />
      <label htmlFor="bday">Birthday</label>
      <input
        onChange={(e) => setBday(e.target.value)}
        type="date"
        name="bday"
        id="bday"
        className="input"
        placeholder="yyyy/mm/dd"
        min="1900-01-01"
        max="2022-11-23"
        required
      />
      <input
        onChange={(e) => setMob(e.target.value)}
        className="input"
        type="tel"
        name="mob"
        placeholder="Contact No."
        required
      />
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
        name="pswd"
        placeholder="Password"
        minLength="8"
        required
      />
      <input
        onChange={(e) => setCPswd(e.target.value)}
        className="input"
        type="password"
        name="cPswd"
        placeholder="Confirm Password"
        minLength="8"
        required
      />
      {!flag ? (
        <button type="submit">Register</button>
      ) : (
        <Link to="/login"><button disabled>Signing up...</button></Link>
      )}
    </form>
    <p>Already have an account? <Link to="/login">Login</Link></p>
  </div>
  );
}

export default Register;
