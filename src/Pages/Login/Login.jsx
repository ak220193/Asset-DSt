import React from 'react'

const Login = () => {
  // const onSignInContainerClick = useCallback(() => {

  // }, []);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg p-8 w-full max-w-[500px]">
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 p-2 rounded h-6"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 p-2 rounded h-6"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-400 text-white py-2 px-4 rounded hover:bg-mediumaquamarine h-16 w-[520px]">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login