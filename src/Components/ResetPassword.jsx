import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../Utilities/firebase.init";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const emailRef = useRef();
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
      const mailToLink = `mailto:${email}?subject=Reset Password&body=Please follow the instructions to reset your password.`;
      window.open(mailToLink, "_blank");
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
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-center text-xl font-bold text-gray-700 mb-6">
          Reset Your Password
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                required
                placeholder="Your email"
                autoComplete="email"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Reset Link
              </button>
              <button
                className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
