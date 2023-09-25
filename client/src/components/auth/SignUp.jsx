import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="sign-up-container border-4 m-auto p-10">
      <form onSubmit={signUp}>
        <h1 className="mb-10 text-white">Create Account</h1>
        <input
          className="block m-5 p-3 rounded-lg w-80"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="block m-5 p-3 rounded-lg w-80"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-white"
          type="submit">Sign up</button>

        <p>Already have an account? <a href="/src/components/auth/SignIn.jsx">Sign in</a></p>
      </form>
    </div>
  );
};

export default SignUp;
