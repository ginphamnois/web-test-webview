import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const [code, setCode ] = useState('');
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Function to handle messages from React Native
    const handleMessage = (event: any) => {
      const data = event.data;

      // Only handle messages with expected data format
      if (data && data.type === "data") {
        setMessage(data.payload); // Update state with the received data
      }
    };

    // Add the message listener when the component mounts
    window.addEventListener("message", handleMessage);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
