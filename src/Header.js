import { useState } from 'react';
import { LOGO_URL } from './Utils/constants';
import { Link } from 'react-router-dom';
import useOnlinestatus from './Utils/useOnlinestatus';
const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlinestatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? '✅' : '🔴'} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === 'login'
                  ? setBtnName('logout')
                  : setBtnName('login');
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
