import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthUser } from '../utils/auth'; // ✅ import utility

const Signup = () => {
  const [activeTab, setActiveTab] = useState('phone');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ for redirect after login

  const handleLogin = () => {
    if (activeTab === 'phone') {
      if (!phone || phone.length < 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }

      const user = {
        method: 'phone',
        phone,
        name: 'User from Phone',
        img: 'https://i.pravatar.cc/300?img=5'
      };
      setAuthUser(user); // ✅ save & emit event
      alert('Logged in with phone!');
    } else {
      if (!email || !password) {
        alert('Email and password are required.');
        return;
      }

      const user = {
        method: 'email',
        email,
        name: 'User from Email',
        img: 'https://i.pravatar.cc/300?img=8'
      };
      setAuthUser(user); // ✅ save & emit event
      alert('Logged in with email!');
    }

    navigate('/'); // ✅ redirect to homepage after login
  };

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center px-6">
      <h1 className="text-4xl font-bold mb-8 mt-20">Sign In</h1>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          className={`pb-1 border-b-2 ${
            activeTab === 'phone' ? 'border-green-500' : 'border-transparent'
          }`}
          onClick={() => setActiveTab('phone')}
        >
          Phone
        </button>
        <button
          className={`pb-1 border-b-2 ${
            activeTab === 'email' ? 'border-green-500' : 'border-transparent'
          }`}
          onClick={() => setActiveTab('email')}
        >
          Email
        </button>
      </div>

      {/* Form Area */}
      <div className="w-full max-w-md mt-8">
        {activeTab === 'phone' && (
          <div className="space-y-4">
            <label className="block text-sm">Mobile Number *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Mobile Number"
              className="w-full px-4 py-2 bg-[#1A1A1A] border-none rounded-md text-white"
            />
          </div>
        )}

        {activeTab === 'email' && (
          <div className="space-y-4">
            <label className="block text-sm">Email Address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 bg-[#1A1A1A] border-none rounded-md text-white"
            />

            <label className="block text-sm">Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 bg-[#1A1A1A] border-none rounded-md text-white"
            />
          </div>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full py-2 bg-[#27DFB3] hover:bg-green-600 text-black font-bold rounded-md"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center justify-between my-6">
          <hr className="w-1/3 border-gray-600" />
          <span className="text-gray-400">Or</span>
          <hr className="w-1/3 border-gray-600" />
        </div>

        {/* Google & Create Account Buttons */}
        <button className="flex items-center justify-center w-full py-2 border border-white rounded-full gap-2 hover:bg-white hover:text-black transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <button className="flex items-center justify-center w-full py-2 border border-white rounded-full gap-2 mt-4 hover:bg-white hover:text-black transition">
          <span className="text-lg">👤</span> Create a New Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
