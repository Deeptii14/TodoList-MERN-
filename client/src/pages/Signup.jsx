import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import background from "../assets/background.png"
const Signup = () => {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, email, password })
      });
      const data = await response.json();
      
      if(response.ok){
        alert('Successfully signed up!');
        navigation('/login')
      }
    } catch (error) {
      console.error(error);
      alert('Some error occured!');
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-start relative'>
    <img className='absolute bottom-0 right-0 mb-6 mr-6' height={300} width={350} src={background} alt="background" />
    <div className="w-screen h-screen pt-28">
      <div className="max-w-sm mx-auto p-4 shadow-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-600 text-2xl mb-8">Sign Up</h2>
          <div className="mb-6">
            <label className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button className="bg-red-600 text-white border-none py-2 px-4 rounded cursor-pointer mb-8 hover:bg-red-700" type="submit">
            Sign Up
          </button>
          <p>
            Already have an account? <Link to="/login" className="text-red-600">Log in</Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
