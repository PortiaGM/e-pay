import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/form.css";

function Login() {
  localStorage.setItem("authenticated", false);
  const [emaillog, setEmaillog] = useState(" ");
  const [pswdlog, setPswdlog]   = useState(" ");
  const [flag, setFlag]         = useState(false);
  const [home, setHome]         = useState(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const emailAd = localStorage
      .getItem("email")
      .replace(/"/g, "");
    const pswd = localStorage
      .getItem("password")
      .replace(/"/g, "");
    if (!emaillog || !pswdlog) {
      setFlag(true);
      {flag && (<Alert severity="warning">Login credentials does not exist.</Alert>)}
      console.log("Login credentials does not exist.");
    } else if (pswdlog !== pswd || emaillog !== emailAd) {
      setFlag(true);
      {flag && (<Alert severity="warning">Your email or password is incorrect. Please try again.</Alert>)}
    } else {
      setHome(!home);
      setFlag(false);
      localStorage.setItem("authenticated", true);
      console.log("Login credentials matches!");
      navigate("/home");
    }
  }

  return (
    <div className="auth-form" id="login">
      <h2 className="title">Welcome to E-Pay</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmaillog(e.target.value)}
          required
        />
        <input
          className="input"
          type="password"
          name="pswd"
          placeholder="Password"
          onChange={(e) => setPswdlog(e.target.value)}
          required
        />
        {!flag ? (
          <button type="submit">Login</button>
        ) : (
          <Link to="/home"><button disabled>Logging in...</button></Link>
        )}
      </form>
      <p><Link to="/forgot-pass">Forgot Password?</Link></p>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;
