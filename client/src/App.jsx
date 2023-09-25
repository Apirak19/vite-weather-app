import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";

const express = require("express");
const fs = require('fs')
const app = express();
const url = require("url");
const http = require("http");

function App() {
  const [count, setCount] = useState(0);


  const homepage = fs.readFile((err, data) => {
    if (err) {
      console.error(err);
    }
    
  }, )
  const server = http.createServer((req, res) => {
    if (req.url === "/"){
      res.end()
    }
  }, )

  return (
    <section className="">
      <AuthDetails />
      <p className="mt-10">All rights reserved to the owner of this website</p>
    </section>
  );
}

export default App;
