import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () =>{  
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between '>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>

      {user && 
      (<div className='m-2 p-2 flex'>
        <img className='w-10 mx-1' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='img'></img>

        <button onClick={handleSignOut} className='font-bold text-white mx-1'>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header;
