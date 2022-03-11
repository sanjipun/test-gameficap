import { gql, useMutation, useQuery } from "@apollo/client";
import Modal from "@components/Modal/Modal";
import { useAuth } from "@store/auth.store";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

interface SignUpProps {}

const SIGN_UP = gql`
  mutation ($email: String!, $password: String!, $firstName: String, $lastName: String) {
    createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      user {
        id
        email
      }
    }
  }
`;

const SignUp: React.FC<SignUpProps> = () => {
  const { openModal, setOpenModal } = useAuth();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [createUser, { data, error }] = useMutation(SIGN_UP, {
    variables: {
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
    },
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    createUser({
      variables: {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
    });
  };
  return (
    <div id="sign up" className="md:mx-2 md:ml-0 mt-3 md:mt-0">
      <button
        onClick={() => setOpenModal("signup")}
        className="bg-94A2AB px-6 py-3 rounded w-full text-white"
      >
        Sign Up
      </button>
      <Modal hideModal={() => setOpenModal("none")} showModal={openModal === "signup"}>
        <form onSubmit={handleSignUp}>
          <div className="w-full flex justify-end">
            <GrClose className="w-5 h-5 cursor-pointer" onClick={() => setOpenModal("none")} />
          </div>
          <h1 className="text-2xl font-semibold leading-47">Sign Up</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit llamcorper consec and a long
            text to make this section longer
          </p>
          <div className="mt-7 flex flex-col">
            <label>First Name</label>
            <input
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              type="text"
              placeholder="First Name"
              className="h-14 px-5 py-3 bg-C4C4C4 bg-opacity-10 rounded-lg border-E3E9EE border"
            />
            <label className="mt-5">Last Name</label>
            <input
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              type="text"
              placeholder="Last Name"
              className="h-14 px-5 py-3 bg-C4C4C4 bg-opacity-10 rounded-lg border-E3E9EE border"
            />
            <label className="mt-5">Email</label>
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
          <div className="flex flex-col mt-5">
            <div className="flex items-center">
              <input type="checkbox" className="bg-F4F5F7 w-6 h-6 mr-2"></input>I agree to receive
              occasional newsletters from Game Fi Cap
            </div>
            <div className="flex items-center mt-5">
              <input type="checkbox" className="bg-F4F5F7 w-6 h-6 mr-2" />I agree to Game Fi Cap
              <b>Terms of Service</b>
            </div>
          </div>
          <button type="submit" className="bg-94A2AB text-white rounded w-full py-4 mt-16">
            Sign Up
          </button>
          <p className="text-sm mt-5">
            Already have an account?{" "}
            <b className="cursor-pointer" onClick={() => setOpenModal("login")}>
              Sign In
            </b>
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default SignUp;
