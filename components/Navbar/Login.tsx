import React from "react";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="md:mx-2 md:ml-0 mt-3 md:mt-0 text-94A2AB">
      <button className="bg-C4C4C4 bg-opacity-20 px-6 py-3 rounded w-full">Login</button>
    </div>
  );
};

export default Login;
