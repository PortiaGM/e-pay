import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [value, setValue] = React.useState('home')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  const handleProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  const handleTrasactions = (e) => {
    e.preventDefault();
    navigate("/transactions");
  };

  return (
      <>
        <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0 }}
        value={value} onChange={handleChange}
        >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          onClick={handleHome}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<AccountBoxIcon />}
          onClick={handleProfile}
        />
        <BottomNavigationAction
          label="Trasactions"
          value="transaction"
          icon={<ReceiptLongIcon />}
          onClick={handleTrasactions}
        />
        </BottomNavigation>
      </>
  );
}