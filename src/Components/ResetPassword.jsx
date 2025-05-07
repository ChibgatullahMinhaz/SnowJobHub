import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../Utilities/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const emailRef = useRef();
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();

  const reset = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        `Password reset email sent to ${email}. Please check your inbox.`
      );
      setIsEmailSent(true);
      window.open("https://mail.google.com", "_blank");
    } catch (error) {
      let errorMessage = "Failed to send password reset email.";
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/user-not-found":
          errorMessage = "There is no user record corresponding to this email.";
          break;
        default:
          console.error("Password reset error:", error.code, error.message);
      }
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-center text-xl font-bold text-gray-700 mb-6 text-shadow-2xs">
          Reset Your <span className="text-blue-500">Password</span>
        </h2>
        {isEmailSent ? (
          <div className="text-center text-green-500 font-semibold mb-4">
            Please check your email inbox for the password reset link.
          </div>
        ) : (
          <form onSubmit={reset}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                ref={emailRef}
                defaultValue={emailFromLogin}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                required
                placeholder="Your email"
                autoComplete="email"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="relative cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Send Link
                </span>
              </button>


              <button
                 onClick={() => navigate("/login")}
                class="relative cursor-pointer px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Back to Login
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
