import { gql, useMutation } from "@apollo/client";
import Modal from "@components/Modal/Modal";
import { useAuth } from "@store/auth.store";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

interface LoginProps {}

const SIGN_IN = gql`
  mutation ($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        email
        firstName
      }
      sessionId
    }
  }
`;

const Login: React.FC<LoginProps> = () => {
  const { openModal, setOpenModal } = useAuth();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [loginUser, { data, error }] = useMutation(SIGN_IN, {
    variables: {
      email: formData.email,
      password: formData.password,
    },
  });
  console.log(data, error);

  const handleSignIn = (e) => {
    e.preventDefault();
    loginUser({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
  };
  return (
    <div id="login" className="md:mx-2 md:ml-0 mt-3 md:mt-0">
      <button
        onClick={() => setOpenModal("login")}
        className="bg-C4C4C4 bg-opacity-20 px-6 py-3 rounded w-full text-94A2AB"
      >
        Login
      </button>
      <Modal hideModal={() => setOpenModal("none")} showModal={openModal == "login"}>
        <div className="w-full flex justify-end">
          <GrClose className="w-5 h-5 cursor-pointer" onClick={() => setOpenModal("none")} />
        </div>
        <form onSubmit={handleSignIn}>
          <h1 className="text-2xl font-semibold leading-47">Sign In</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit llamcorper consec and a long
            text to make this section longer
          </p>
          <div className="mt-7 flex flex-col">
            <label>Email</label>
            <input
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              type="text"
              placeholder="Name@example.com"
              className="h-14 px-5 py-3 bg-C4C4C4 bg-opacity-10 rounded-lg border-E3E9EE border"
            />
            <label className="mt-5">Password</label>
            <div className="flex items-center rounded-lg rounded-r-none bg-C4C4C4 bg-opacity-10 border border-E3E9EE">
              <input
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="h-14 px-5 py-3 bg-C4C4C4 bg-opacity-10 rounded-lg w-full"
              />
              {!showPassword && (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(true)}
                  className="w-5 h-5 mr-3"
                />
              )}
              {showPassword && (
                <AiOutlineEye onClick={() => setShowPassword(false)} className="w-5 h-5 mr-3" />
              )}
            </div>
          </div>
          <button type="submit" className="bg-94A2AB text-white rounded w-full py-4 mt-16">
            Sign In
          </button>
          <p className="text-sm mt-5">
            Forgot password? <b>Reset password</b>
          </p>
          <p className="text-sm mt-5">
            Don’t have Game Fi Cap account?{" "}
            <b className="cursor-pointer" onClick={() => setOpenModal("signup")}>
              Create one
            </b>
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
