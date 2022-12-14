import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Avatar } from "@mui/material";
import "./../styles/profile.css";

const Profile = () => {
  const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem("authenticated")));
  const navigate = useNavigate();
  const editBtn = () => {navigate("/profile-edit");}
  const fname = localStorage
    .getItem("firstName")
    .replace(/"/g, "");
  const lname = localStorage
    .getItem("lastName")
    .replace(/"/g, "");
  const bday = localStorage
    .getItem("birthday")
    .replace(/"/g, "");
  const mob = localStorage
    .getItem("mobile")
    .replace(/"/g, "");
  const email = localStorage
    .getItem("email")
    .replace(/"/g, "");
  const name = [fname, lname].join(' ');
  
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
      <div className="app">
          <div className="main-container">
            <div className="container userInfo">
              <Avatar className="avatar" alt={name} src="/static/images/avatar/1.jpg"/>
              <h1 className="avatarName">{name}</h1>
              <h2 className="head">{bday}</h2>
              <p className="sub">Birthdate</p>
              <h2 className="head">{mob}</h2>
              <p className="sub">Contact Number</p>
              <h2 className="head">{email}</h2>
              <p className="sub">Email Address</p>
              <button className="editBtn" onClick={editBtn}>Edit</button>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
};

export default Profile;
