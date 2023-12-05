import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
   
    console.log('Logging in...');
  };

  return (
    <div className="bg-blue-100 h-screen  flex items-center justify-center">
      <div className="bg-white p-8 rounded e-xl shadow-md w-96">
        <h1 className="text-2xl text-center font-semibold mb-6"> Login</h1>

     
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

       
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
          >
          </button>
        </div>

       
        <div className="flex items-center justify-center">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
