import React, { useState } from 'react';
import Header from "./Header";

const Login = () => {
  const [ signIn, setSignIn ] = useState(true);
  const toggleSignIn = ()=>{
      setSignIn(!signIn);
  }

  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='img'></img>
      </div>
      <form className='absolute bg-black px-20 py-10 w-4/12 flex flex-col my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>

        <h1 className='py-2 my-4 font-bold text-4xl'> {signIn ? "Sign In" : "Sign Up"} </h1>

        {!signIn && <input className='p-4 my-4 bg-zinc-800 rounded-md bg-opacity-70' type='text' placeholder='Full Name' /> }

        <input className='p-4 my-4 bg-zinc-800 rounded-md bg-opacity-70' type='text' placeholder='Email or phone number' />

        <input className='p-4 my-4 bg-zinc-800 rounded-md bg-opacity-70' type='password' placeholder='Password' />

        <button className='bg-red-700 p-3 mt-6 mb-6 font-bold rounded-md'>{signIn ? "Sign In" : "Sign Up"}</button>

        <p className='text-slate-400'> {signIn ? "New to Netflix?" : "Already have an account?"} <span onClick={toggleSignIn} className='text-white font-semibold cursor-pointer'> {signIn ? "Sign Up now" : "Sign In"}</span></p>
         
      </form>
    </div>
  )
}

export default Login;
