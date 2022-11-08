import React, { useEffect, useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import logo from './logo.svg';
import uuid from 'react-uuid';
import jwt_decode from 'jwt-decode';

var deviceId = localStorage.getItem('deviceId');
if (!deviceId) {
  console.log('saving device ID');
  deviceId = uuid();
  localStorage.setItem('deviceId', deviceId);
}

console.log('device ID', deviceId);



const clientId = '1052228085695-hqsnpta263kael7g4tlkoa3tjrnt0uf1.apps.googleusercontent.com';



function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: (response) => {
        const userObject = jwt_decode(response.credential);
        sessionStorage.setItem('userId', userObject.sub);
        setLoggedIn(Boolean(sessionStorage.getItem('userId')));
        navigate("/welcome");
        console.log('responseGoogle userObject', userObject);
      }
    });

    google.accounts.id.renderButton(
      document.getElementById('SignInDiv'),
      { theme: "outline", size: "small" }
    );

    setLoggedIn(Boolean(sessionStorage.getItem('userId')));
  }, [loggedIn, navigate])

  return (
    <header className="flex items-end justify-between pt-5">
      <div id="main-logo">
        <img src={logo} className='block' alt="Logo" />
        <div className="mt-1 block">The Little Helper</div>
      </div>

      <div className="mr-9" id="main-menu">
        {loggedIn || <div id="SignInDiv" className="mb-9"></div>}
        <Link className="text-base text-lg text-gray-500 hover:text-gray-900 mr-7" to="/welcome">Home</Link>
        <Link className="text-base text-lg text-gray-500 hover:text-gray-900 mr-7 " to="/lists">My Lists</Link>
        {loggedIn && <button
          href="#"
          className="text-base text-lg text-gray-500 hover:text-gray-900"
          onClick={() => {
            console.log("clicked");
            sessionStorage.removeItem('userId');
            setLoggedIn(false);
            navigate("/welcome");
          }}>
          Logout
        </button>}
      </div>
    </header >
  );
}

export default Header;
