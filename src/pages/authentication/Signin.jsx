import React, { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async  (e) => {
    e.preventDefault()
    try {
        const userCreds = await signInWithEmailAndPassword(auth, email, password);
        navigate('/home');
        console.log('Sign in with:', userCreds.user.email);
    } catch (error) {
        setErrorMessage(error.message);
    }
  }

  if(errorMessage){
    setTimeout(() => {
      setErrorMessage('');
    }, 2000);
  }

  return (
    <>
    <Header />
    <div className="min-h-[100vh] w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50 to-sky-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/90 backdrop-blur rounded-xl shadow-lg border border-slate-100 p-6"
      >
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">Sign in</h2>
        <p className="text-slate-500 text-sm mb-6">Sign in with your email and password.</p>

        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email" className="text-sm text-slate-600">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-200 transition"
          />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="password" className="text-sm text-slate-600">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a strong password"
            required
            className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-200 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 rounded-lg font-semibold text-teal-900 border border-teal-300 bg-gradient-to-r from-teal-200 to-sky-200 hover:from-teal-300 hover:to-sky-300 active:from-teal-200 active:to-sky-200 transition shadow-sm"
        >
          Sign in
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <div className="mt-6 text-center text-xs">
          <p>Don't have an account? <Link to="/" className="text-teal-600 hover:underline">Sign up</Link></p>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signin