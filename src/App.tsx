import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRNHandler } from "./utils/MessageEventEmiter";

function App() {
  // const [code, setCode ] = useState('');
  const [message, setMessage] = useState("");
  // Define the callback function to handle the event
  const handleMessage = (payload: any) => {
    toast(payload);
    console.log("Message from RN:", payload);
    setMessage(payload);
  };

  // Register the handler for a specific action
  useRNHandler("message", handleMessage); // This line registers the handler

  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={notify}>Notify!</button>

        <p>Message from React Native: {message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
