import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  return (
    <div>
      {authUser ? (
        <SignIn />
      ) : (
         <SignIn />
      )}
    </div>
  );
};

export default AuthDetails;
