// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { Routing, AuthProvider } from "./config";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </div>
  );
}

export default App;
