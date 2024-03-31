import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, PROFILE_URL } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () =>{  
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    return () => unsubscribe();

  }, []);
  

  return (
    <div className='absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between '>
      <img className='w-44' src = {LOGO_URL} alt='logo'></img>

      {user && 
      (<div className='m-2 p-2 flex'>
        <img className='w-10 mx-1' src={PROFILE_URL} alt='img'></img>

        <button onClick={handleSignOut} className='font-bold text-white mx-1'>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header;
