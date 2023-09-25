import React, { useState, useEffect } from "react";
import "./App.css";
import AuthDetails from "./components/auth/AuthDetails";

function App() {
  const [backendData, setBackendData] = useState({users: []});

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
    console.log(data);
  }, []);

  return (
    <section className="">
      {typeof backendData.users === "undefined" ? (
        <p>loading...</p>
      ) : (
          backendData.users.map((user, i) => {
          return <p key={i}>{user}</p>;
        })
      )}
    </section>
  );
}

export default App;
