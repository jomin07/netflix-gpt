import React, { useRef, useState } from 'react';
import Header from "./Header";
import { checkValidData  } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_URL } from '../utils/constants';

const Login = () => {
    const [ signIn, setSignIn ] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState("");
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignIn = ()=>{
        setSignIn(!signIn);
    }

    const handleClick = ()=>{
        const err = checkValidData(email.current.value, password.current.value);
        setErrorMessage(err);

        if(err) return;

        if(!signIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value
              }).then(() => {
                // Profile updated!
                const { uid, email, displayName } = auth.currentUser;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
              });
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        }

    }

    return (
      <div >
        <Header />
        <div className='absolute'>
          <img src={BACKGROUND_URL} alt='img'></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black px-20 py-10 w-4/12 flex flex-col my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>

          <h1 className='py-2 my-4 font-bold text-4xl'> {signIn ? "Sign In" : "Sign Up"} </h1>

          {!signIn && <input ref={name} className='p-4 my-4 bg-zinc-800 rounded-md bg-opacity-70' type='text' placeholder='Full Name' /> }

          <input ref={email} className='p-4 my-4 bg-zinc-800 rounded-md bg-opacity-70' type='text' placeholder='Email' />

          <input ref={password} className='p-4 my-4 bg-zinc-800 rounded-md bg-opacity-70' type='password' placeholder='Password' />

          <p className='text-red-700 font-bold'> {errorMessage} </p>

          <button onClick={handleClick} className='bg-red-700 p-3 mt-6 mb-6 font-bold rounded-md'>{signIn ? "Sign In" : "Sign Up"}</button>

          <p className='text-slate-400'> {signIn ? "New to Netflix?" : "Already have an account?"} <span onClick={toggleSignIn} className='text-white font-semibold cursor-pointer'> {signIn ? "Sign Up now" : "Sign In"}</span></p>

        </form>
      </div>
    )
}

export default Login;
