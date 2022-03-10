import React from "react";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <div className="md:mx-2 md:mr-0 mt-3 md:mt-0">
      <button className="px-6 py-3 bg-94A2AB rounded w-full text-white">Sign Up</button>
    </div>
  );
};

export default SignUp;
