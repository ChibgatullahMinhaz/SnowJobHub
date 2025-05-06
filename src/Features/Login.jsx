import React, { useContext, useRef } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../Store/Context/AuthContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Login = () => {
  const emailRef = useRef();
  const { creteUserWithGoogle, userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        toast.success("login successful");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorcode = error.code;
        if (errorcode == "auth/user-not-found") {
          toast.warning("Invalid User ! please Create An Account");
        } else if (errorcode === "auth/wrong-password") {
          toast.warning("Wrong Password");
        } else if (errorcode === "auth/invalid-credential") {
          toast.warn("Invalid email or password");
        }
      });
  };

  const handleReset = () => {
    navigate('/resetPassword')
  };

  // login with google
  const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    creteUserWithGoogle(provider)
      .then((result) => {
        toast.success("User Login Successfully");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.warning(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Login - SnowJobHub</title>
        <meta
          name="description"
          content="Login your SnowJobHub account to explore job opportunities"
        />
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-body"
        >
          <form className="fieldset" onSubmit={handleSingIn}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              autoComplete="email"
              
            />
            <label className="label">Password</label>
            <input
              required
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
              autoComplete="current-password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a onClick={handleReset} className="link link-hover">
                Forgot password?
              </a>
            </div>
            <br />
            <p>
              Don't have an account? Create one now!{" "}
              <Link to="/singUp" className="text-blue-400 underline">
                SingUp
              </Link>{" "}
            </p>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <p className="text-center">Or</p>
          <button
            className="btn bg-white text-black border-[#e5e5e5]"
            onClick={handleLoginWithGoogle}
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
