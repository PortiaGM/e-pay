import { Alert } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/form.css";

function ProfileEdit() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [bday, setBday]   = useState("");
  const [mob, setMob]     = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag]   = useState(false);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const oldfname = localStorage
    .getItem("firstName")
    .replace(/"/g, "");
  const oldlname = localStorage
    .getItem("lastName")
    .replace(/"/g, "");
  const oldbday = localStorage
    .getItem("birthday")
    .replace(/"/g, "");
  const oldmob = localStorage
    .getItem("mobile")
    .replace(/"/g, "");
  const oldemail = localStorage
    .getItem("email")
    .replace(/"/g, "");

function handleSubmit(e) {
  e.preventDefault();
  if(!fname || !lname || !bday || !mob || !email) {
    setFlag(true)
  } else {
    setFlag(false);
    localStorage.setItem("firstName", JSON.stringify(fname));
    localStorage.setItem("lastName", JSON.stringify(lname));
    localStorage.setItem("birthday", JSON.stringify(bday));
    localStorage.setItem("mobile", JSON.stringify(mob));
    localStorage.setItem("email", JSON.stringify(email));
    console.log("Saved in Local Storage");
    setLogin(!login);
    <Alert severity="sucess">Profile edit successful.</Alert>
    navigate("./../profile");
  }
}

function handleChange() {
  setLogin(!login);
}

  return (
  <div className="auth-form" id="register">
    <h2 className="title">Edit Profile</h2>
    <form id="register-form" onSubmit={handleSubmit}>
      <input
        value={oldfname}
        onChange={(e) => setFname(e.target.value)}
        className="input"
        type="text"
        name="fname"
        id="first-name"
        placeholder="First Name"
        required
      />
      <input
        value={oldlname}
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
        value={oldbday}
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
        value={oldmob}
        onChange={(e) => setMob(e.target.value)}
        className="input"
        type="tel"
        name="mob"
        placeholder="Contact No."
        required
      />
      <input
        value={oldemail}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      {!flag ? (
        <button type="submit">Edit Profile</button>
      ) : (
        <Link to="./../profile"><button disabled>Signing up...</button></Link>
      )}
    </form>
    <p><Link to="./../profile">Cancel</Link></p>
  </div>
  );
}

export default ProfileEdit;
