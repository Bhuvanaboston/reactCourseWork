import { useState, useContext } from 'react';
import { LOGO_URL } from './Utils/constants';
import { Link } from 'react-router-dom';
import useOnlinestatus from './Utils/useOnlinestatus';
import UserContext from './Utils/UserContext';
const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlinestatus();
  const userData = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg m-5">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
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
          <li className="px-4 font-bold">{userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
