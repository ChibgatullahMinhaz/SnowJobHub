import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Store/Context/AuthContext";

const SingUp = () => {
  // const { , userLogin } = useContext(AuthContext);

  const { createUser, creteUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateAccount = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const checked = e.target.terms.checked;
    if (!checked) {
      toast.warn("please Accept our terms and conditions");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        toast.success("Account Create Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.warning("You have Already an Account! Please Login");
      });
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
        <title>Register - SnowJobHub</title>
        <meta
          name="description"
          content="Create a SnowJobHub account to explore job opportunities"
        />
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-body"
        >
          <form className="fieldset" onSubmit={handleCreateAccount}>
            <h1 className="text-2xl text-gray-700 text-center font-bold">
              Create an <span className="text-blue-400">Account</span>{" "}
            </h1>
            <small className="text-center text-blue-700 font-semibold">
              with SnowJobHub
            </small>
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Type here"
            />
            <label className="label">Photo URL</label>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                type="text"
                required
                name="photo"
                placeholder="https://"
                defaultValue="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
            <label className="label">Email</label>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                placeholder="mail@site.com"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            <label className="label">Password</label>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                minLength="6"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 6 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            <div className="flex gap-x-2">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-xs"
              />
              <p>Accept our terms and conditions</p>
            </div>

            <p>
              You have an account? Please Login!{" "}
              <Link to="/login" className="text-blue-400 underline">
                Login
              </Link>{" "}
            </p>
            <motion.div
              className=" text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button
                type="submit"
                className="relative btn  mt-4 px-6 py-2 border w-full border-blue-500 text-blue-500 rounded-full overflow-hidden group transition-all duration-300 cursor-pointer"
              >
                <span className="absolute w-0 h-full left-0 top-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-all duration-300">
                  Create Account
                </span>
              </button>
            </motion.div>
          </form>
          <p className="text-center">Or</p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
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
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default SingUp;
