import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(`sign out successfully`);
      })
      .catch(() => {
        console.error(`sign out failed`);
      });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Login to your Accout</h1>
        <div className="log-in-container relative m-auto bg-white w-72 h-72 rounded-lg">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        <p>{`signed in as ${authUser.email}`}</p>
        <button onClick={userSignOut}>sign out</button>
      </div>
    </div>
  );
};

export default SignIn;
